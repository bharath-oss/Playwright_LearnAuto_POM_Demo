import test from '@playwright/test';
import { OH_Login } from '../OrangeHrm/pages/OH_Login';

test("Orange Hrm",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);
    const login=new OH_Login(page);
    await login.logApp()
})