import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';

test.describe('Login End to end testing', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });
    
    test('Login with invalid credentials', async ({ page }) => {
        const username = 'invalid';
        const password = 'invalid';
        const expectedErrorMessage = 'Epic sadface: Username and password do not match any user in this service';

        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage(expectedErrorMessage);
    });

    test('Login with empty credentials', async ({ page }) => {
        let username = '';
        const password = '';
        const usernameReqErrMsg = 'Epic sadface: Username is required';
        const passwordReqErrMsg = 'Epic sadface: Password is required';

        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage(usernameReqErrMsg);

        username = 'standard_user';
        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage(passwordReqErrMsg);
    });

    test('Login with valid credentials', async ({ page }) => {
        const username = process.env.USERNAME || '';
        const password = process.env.PASSWORD || '';

        await loginPage.goto();
        await loginPage.login( username, password);
    
        await expect(page).toHaveURL(process.env.BASE_URL + 'v1/inventory.html');
    });
});