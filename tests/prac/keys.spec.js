import test from '@playwright/test';

test("keyboard even practise",async({page})=>{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    // await page.locator("//textarea[@name='q']").fill("playwright").then(async()=>{await page.keyboard.press("ArrowDown");await page.keyboard.press("ArrowDown");await page.keyboard.press("ArrowDown")});
    // await page.keyboard.press("Enter");
    // await page.waitForTimeout(2000);

    await page.locator("//textarea[@name='q']").fill("playwright");
    await page.waitForTimeout(2000);
    await page.keyboard.press("Space");

    let searchOpts=await page.$$("//li[@role='presentation']");
    for(let i=0;i<searchOpts.length;i++)
    {
        let optTxt=searchOpts[i].innerText();
        console.log(optTxt);

        if((await optTxt).includes("selenium")){
            await page.waitForTimeout(3000);
            await searchOpts[i].click();
            await page.waitForTimeout(3000);
        }
    }

})