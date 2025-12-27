import test  from '@playwright/test';

test('Frame handling test', async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    
   const iframe= page.frameLocator('#frm1');
      await page.waitForTimeout(2000);
   await iframe.locator("#selectnav1").first().selectOption('- Alerts');
   await page.waitForTimeout(2000);
   page.mainFrame();
      await page.waitForTimeout(2000);
   await page.locator("#Header1_headerimg").click();
      await page.waitForTimeout(5000);
});
