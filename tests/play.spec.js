import {test} from '@playwright/test';

test("Playwright A-Z",async({page})=>{
    
    await page.goto("http://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.locator("#username").fill("bhb");
    await page.waitForTimeout(2000);
    await page.locator("(//*[contains(text(),'role')])/following::label[2]").check();
})