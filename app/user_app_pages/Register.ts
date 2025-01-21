import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { env } from "../../playwright.config";

export class SignUp extends AppPage { 

    public pagePath = `${env.WEB_APP_URL}/registration`
    private registerBtn = this.page.locator('button.button__base')
    private emailInput = this.page.locator('input[name="email"]')
    private passwordInput = this.page.locator('input[name="password"]')
    private registerWithGoogle = this.page.getByRole('img', { name: 'Google' })
    private LicenseAgreementCheckbox = this.page.locator('label span').first()

    async expectLoaded() {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.registerBtn).toBeVisible();
        await expect(this.LicenseAgreementCheckbox).toBeVisible();
        await expect(this.registerWithGoogle).toBeVisible();
    }

    async viaEmail(user: { email: string, password: string }) {
        await this.expectLoaded();
        await this.emailInput.fill(user.email)
        await this.passwordInput.fill(user.password)
        await this.LicenseAgreementCheckbox.click()
        if ( await this.page.getByText('Україна').isHidden()) {
          await this.page.locator('.selected-auth-icon').click()
          await this.page.getByText('Україна').click()
        }
        await this.registerBtn.click()
    }
    
}
