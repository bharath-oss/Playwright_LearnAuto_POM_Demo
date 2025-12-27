import test from '@playwright/test';

test("Selct scroll Practise",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
    await page.waitForTimeout(2000);

    await page.getByPlaceholder("Select an item").click();
    await page.locator("//*[text()='Item 20']").scrollIntoViewIfNeeded();
    await page.locator("//*[text()='Item 20']").click();

    
});