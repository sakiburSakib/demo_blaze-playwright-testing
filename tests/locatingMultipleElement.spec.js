const{test, expect} = require('@playwright/test');

test('Multiple element locator', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    const elements = await page.locator('//a').allTextContents();
    //const elements = await page.$$('//a');
    console.log(elements);

    const products = await page.locator("//div[contains(@id,'tbodyid')]//div/h4/a");
    await expect(products.first()).toBeVisible();

    const productNames = await products.allTextContents();
    console.log(productNames);

});
    
    ////a[contains(@class,"hrefch")]