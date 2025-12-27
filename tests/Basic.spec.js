// import {test} from '@playwright/test';
const {test,expect}=require('@playwright/test');

test("Welcome to playright",async({page})=>{
    
    await page.goto("https://www.google.com/");
    await page.locator('//textarea[@name="q"]').fill("Playwright Automation Testing");
    await page.waitForTimeout(3000);

    await page.close();

})