import test, { expect } from '@playwright/test';
import testdata from './Testdata/jsonpr.json';

const testDa = JSON.parse(JSON.stringify(testdata));

test('JSON Parsing and Validation Test', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.waitForTimeout(2000);
    await expect(page.locator('//button[@type="submit"]')).toBeDisabled();

    await page.waitForTimeout(8000);

    await page.getByPlaceholder("Name").fill(testDa[0].name);
    await page.locator('#email').fill(testDa[0].username);
    await page.getByTitle("Password must be atleast 6 characters").fill(testDa[0].password);

    // await page.getByText(testDa[0].Intrests).click();

    await testDa[0].Intrests.forEach(async (ele, ind, arr) => {
        await page.getByText(ele).click();
        // console.log(`Clicked on interest: ${ele}`);
    })

    await page.getByText(testDa[0].Gender).click();

    await page.locator("#state").selectOption(testDa[0].State);
    // await page.getByText(testDa[0].Hobbies).click();

    await testDa[0].Hobbies.forEach(async (ele, ind, arr) => {
        await page.getByText(ele).click({modifiers:['Control']});
        // console.log(`Clicked on Hobbies: ${ele}`);
    })

    await expect(page.locator('//button[@type="submit"]')).toBeEnabled();


});