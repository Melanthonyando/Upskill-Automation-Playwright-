const { test, expect } = require('@playwright/test');
const { Login } = require('../login');
const { time } = require('node:console');

test.beforeEach(async ({ page}) => {
    // Initialize the login class
    const login = new Login(page);
    await login.LoginAdmin();
     timeout: 3000; // Wait for the page to load

})
test ('Verify Admin able to Add Employee successfully', async ({ page }) => {
    // Navigate to the Menu Employee Side Bar
    await page.locator('a:has-text("Employees")')
        .first()
            .click();
    await page.locator('a', { hasText: 'Employees'})
        .locator('i.fa-users')
            .click();
        timeout: 5000; // Wait for the page to load
    
    // Click the "Add Employee" button
   await page.getByRole('button', { name: 'user-add Add a New Employee' })
        .click();
        timeout: 5000; // Wait for the page to load
    // Fill in the employee details in the modal form
    await page.getByText('Employee Number', { exact: true })
        .fill('12345');
    await page.getByText('First Name', { exact: true })
        .fill('Test_User1');
    await page.getByText('Middle Name', { exact: true })
        .fill('Test_user1');
    await page.getByText('Last Name', { exact: true })
        .fill('TEST_USER1');
        // select nationality 
    await page.getByText('Nationality', { exact: true })
        page.locator('#rc_select_1')
                .click();
                await page.keyboard.type('Filipino');
                   await page.keyboard.press('Enter');
    // select Date
    await page.getByText('Date of Birth' )
        await page.getByRole('textbox', { name: '* Date of Birth :' })
            .click();
                await page.keyboard.type('05/28/1999')
                await page.keyboard.press('Enter')
    // select Gender
    await page.getByText('Gender', { exact: true })
        await page.locator('#rc_select_2')
            .click()
                await page.keyboard.type('Male');
                    await page.keyboard.press('Enter')
    // select Marital Status
    await page.getByText('Marital Status', { exact: true })
        page.locator('#rc_select_3')
            .click();
            page.keyboard.type('Single')
                await page.keyboard.press('Enter')
    
    // Select Ethnicity
    await page.getByText('Ethnicity', { exact: true })
        page.locator('#rc_select_4').click()
            page.keyboard.type('Asian American')
                await page.keyboard.type('Enter')
});

test('User able to view the Employees page', async ({ page }) => {
    // Click the "Admin"
        // it will redirect to the Employees page
    await page.locator('button', {hasText: 'Admin'}).click();
     {timeout: 5000} // Wait for the page to load


})