// describe test 
// its used to group a set of related tests into a single test suiteIn Playwright, 
// test.describe() is used to group a set of related tests into a single test suite.

import { test, expect } from '@playwright/test';
import logindata from './Testdata/mul_login.json';

test.describe('Test Describe ', ()=> {

    for(let i of logindata) {
        console.log(`Id is ${i.id} UserName is ${i.username} and Password is ${i.password}`);
        test.describe(`Login Test for ${i.id}`,() => {
            test(`Login Browser with ids`, async ({ page }) => {
                await page.goto("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
                await page.locator("//input[@name='Email']").fill(i.username);
                await page.locator("//input[@name='Password']").fill(i.password);
                await page.waitForTimeout(2000);
            })
        });
    }
});

