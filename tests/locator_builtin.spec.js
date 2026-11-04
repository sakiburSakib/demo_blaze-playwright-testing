const{test,expect}=require('@playwright/test');

test('Locator built-in methods',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() - to locate an element, usually an image, by its alt text.
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - to locate an input element by its placeholder text.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRole() - to locate an element by its ARIA role.
    await page.getByRole('button',{type: 'submit'}).click();

    //page.getByText() - to locate an element by its visible text content.
    const name=await page.locator("//span[contains(@class,'oxd-userdropdown')]").textContent();
    await expect(await page.getByText(name)).toBeVisible();
    // const dashboard = await page.getByText('Dashboard');
    // await expect(dashboard).toBeVisible();

})

/*
page.getByAltText() - to locate an element, usually an image, by its alt text.
page.getByLabel() - to locate an input element by its associated label text.
page.getByPlaceholder() - to locate an input element by its placeholder text.
page.getByRole() - to locate an element by its ARIA role.
page.getByTestId() - to locate an element by its data-testid attribute.
page.getByText() - to locate an element by its visible text content.
page.getByTitle() - to locate an element by its title attribute.

*/ 