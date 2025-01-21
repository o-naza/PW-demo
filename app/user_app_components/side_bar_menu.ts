import { expect } from "@playwright/test";
import { Component } from "../abstractClasses";

export class SideMenu extends Component {

    private profileLink = this.page.getByRole('link', { name:'Особистий профіль'})
    private surveysLink = this.page.getByRole('link', { name: 'Опитування' })
    private bonusesLink = this.page.getByRole('link', { name: 'Бонуси'})
    private contactLink = this.page.getByRole('link', { name: 'Зв\'язатися з нами' })

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