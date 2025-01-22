import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { env } from "../../playwright.config";

export class SignIn extends AppPage {

    public pagePath = `${env.WEB_APP_URL}/auth`
    private emailInput = this.page.locator('input[name="email"]')
    private passwordInput = this.page.locator('input[name="password"]')
    private loginWithGoogle = this.page.getByRole('img', { name: 'Google' })
    private loginWithFacebook = this.page.getByRole('button', { name: 'facebook' })
    private loginButton = this.page.locator('button.button__base')
    private countryList = this.page.locator('selected-auth-text')

    async expectLoaded() {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginWithGoogle).toBeVisible();
        await expect(this.loginWithFacebook).toBeVisible();
        await expect(this.countryList).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async viaEmail(user: { email: string, password: string }) {
        await this.expectLoaded();
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password)
        await this.loginButton.click()
    }
    
}
