import { expect } from "@playwright/test";
import { Component } from "../abstractClasses";

export class SideMenu extends Component {

    private profileLink = this.page.locator('a[href="/profile"]'); 
    private surveysLink = this.page.locator('a[href="/surveylist"]');
    private bonusesLink = this.page.locator('a[href="/bonuses"]');
    private contactLink = this.page.locator('a[href="/contact"]');

    async expectLoaded() {
      await expect(this.profileLink).toBeVisible();
      await expect(this.surveysLink).toBeVisible();
      await expect(this.bonusesLink).toBeVisible();
      await expect(this.contactLink).toBeVisible();
  }
  async openSurveyListPage() {
    await this.expectLoaded();
    await this.surveysLink.click()
}
}