import test, { expect } from '@playwright/test';

test("filupload practise",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manoj M/Downloads/Band_R.pdf");
    await page.getByText("Upload Single File").click();
    await page.waitForTimeout(2000);
   
    await expect(page.locator("#singleFileStatus")).toContainText("Band_R.pdf");

    await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/Manoj M/Downloads/Band_R.pdf','C:/Users/Manoj M/Downloads/half1.pdf']);
    await page.getByText("Upload Multiple Files").click();
    await page.waitForTimeout(2000);
    await expect(page.locator("#multipleFilesStatus")).toContainText("half1.pdf");  



});