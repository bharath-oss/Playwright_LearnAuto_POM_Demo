import test, { expect } from "@playwright/test";

test("mouse hover practise", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
  await page.waitForTimeout(2000);
  await page.getByText('Point Me').hover();
  await page.getByText('Laptops').hover();
  await page.waitForTimeout(2000);


});