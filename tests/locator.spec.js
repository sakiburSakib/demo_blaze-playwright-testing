import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    
    
    await page.locator('#loginpassword').fill('test@123');


    await page.locator('//button[contains(@onclick, "logIn()")]').click();

    const logout = await page.locator('//a[contains(@id,"logout2")]');
    await expect(logout).toBeVisible();

    await page.close();
});


/*
# link/button
-------
await page.locator('locator').click();
await page.click('locator');


#inputbox
-------
await page.locator('locator').fill('text');
await page.locator('locator').type('text');

await page.fill('locator', 'text');
await page.type('locator', 'text');

locate multiple web elements
----------
const elements = await page.locator('locator').all();
const elements = await page.locator('locator').allTextContents();
const elements = await page.$$('locator');

 */