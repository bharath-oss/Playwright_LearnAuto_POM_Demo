import { test, expect } from '@playwright/test';
import testdata from '../Data/LearnAutoData.json';
import { LaunchPage } from '../pages/LaunchPage';
import { Loginpage } from '../pages/Loginpage.';
import { Cartpage } from '../pages/Cartpage';
import { LogoutPage } from '../pages/Logoutpage';
import heler, { Helper } from '../pages/Helper';
let data = testdata[0];


test("Learn Automation Courses", async ({ page }) => {

    const hp = new Helper(page);

    const pg = new LaunchPage(page);
    await pg.navigateToURL(data.URL);
    await hp.screenshot("Launch Page");

    const lp = new Loginpage(page);
    await lp.loginToApplication(data.email, data.password);
    await hp.screenshot("Loged into App");

    const cp = new Cartpage(page, expect);
    await cp.addCourseToCart();
    await hp.screenshot("Cart Added");

    const lo = new LogoutPage(page);
    await lo.Logout();
    await hp.screenshot("User logged");

})