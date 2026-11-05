import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('cell', { name: 'Delete' }).first().click();
  await page.getByRole('link', { name: 'Delete' }).first().click();
  await page.getByRole('link', { name: 'Delete' }).first().click();
  await page.getByRole('link', { name: 'Delete' }).first().click();
  await page.getByRole('link', { name: 'Delete' }).nth(1).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Log out' }).click();
});