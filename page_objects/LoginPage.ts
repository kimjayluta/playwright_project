
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessageElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('data-test=username');
        this.passwordField = page.locator('data-test=password');
        this.loginButton = page.locator('id=login-button');
        this.errorMessageElement = page.locator('data-test=error');
    }

    async goto() {
        await this.page.goto('/v1/index.html');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessageElement).toHaveText(expectedMessage);
    }
}

export default LoginPage;