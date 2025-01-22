import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { SideMenu } from "../user_app_components/side_bar_menu";
import { env } from "../../playwright.config";

export class Profile extends AppPage {

  public pagePath = `${env.WEB_APP_URL}/profile`
  public sideMenu = new SideMenu(this.page)
  private emailBlock = this.page.locator('.profile-date-item-name')

  async expectLoaded() {
    await expect(this.emailBlock.first()).toBeVisible({ timeout: 10000 });
  }
  async userEmailIsVisible(user: { email: string }) {
    await this.expectLoaded();
    await expect(this.page.getByText(user.email)).toBeVisible();
  }

}
