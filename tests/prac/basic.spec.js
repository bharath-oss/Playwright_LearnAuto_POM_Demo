import test, { expect } from "@playwright/test";

test("Basic Playwright Test", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(2000);
  await page.title().then((title)=>{expect(title).toBe("OrangeHRM")});

});