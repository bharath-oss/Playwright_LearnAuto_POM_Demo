import test from "@playwright/test"

test("Alert Handling Test", async ({ page }) => {

    // simple alert
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
    await page.waitForTimeout(2000);

    await page.getByText("Simple Alert").click();
    await page.waitForTimeout(6000);
    await page.screenshot({ path: "C:\\Users\\Manoj M\\OneDrive\\Documents\\Bharath\\Automation\\Playwright\\tests\\screenshots\\simplealert.png" });
    await page.waitForTimeout(6000);

    page.on("dialog", async (dialog) => {
        await dialog.accept();
    })

    await page.locator("#confirmBtn").click();
    await page.waitForTimeout(6000);
    await page.screenshot({ path: "C:\\Users\\Manoj M\\OneDrive\\Documents\\Bharath\\Automation\\Playwright\\tests\\screenshots\\confirmationAlert.png" });

    await page.waitForTimeout(6000);

    page.on("dialog", async (dia) => {
        await dia.dismiss();

        await page.locator("#promptBtn").click();
        await page.waitForTimeout(6000);
        await page.screenshot({ path: "C:\\Users\\Manoj M\\OneDrive\\Documents\\Bharath\\Automation\\Playwright\\tests\\screenshots\\promptAlert.png" });

        await page.waitForTimeout(6000);

        await dia.accept("bhb ok wa");

    })
    await page.waitForTimeout(2000);
    console.log("Test completed successfully!");
});