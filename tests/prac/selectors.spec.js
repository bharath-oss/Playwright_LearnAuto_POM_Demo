import  test from '@playwright/test';

test("Selectors Practise",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);    
    await page.getByPlaceholder("Username").type("Admin",{delay:500}); //types with delay for 5 miilisec for each character eg: a->5sec d->5sec m->5sec i n
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(4000);   
    await page.getByAltText("profile picture").first().click();
    await page.locator("(//a[@role='menuitem'])[4]").click();
    await page.waitForTimeout(4000);
    await page.close();    
});