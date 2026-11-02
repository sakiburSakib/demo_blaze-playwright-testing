const{test,expect}=require('@playwright/test');

test('Locator built-in methods',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

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