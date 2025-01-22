import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { SideMenu } from "../user_app_components/side_bar_menu";
import { env } from "../../playwright.config";


export class Surveys extends AppPage {

    public pagePath = `${env.WEB_APP_URL}/surveylist`
    public sideMenu =  new SideMenu(this.page)
    private avalibleSurveysTab = this.page.locator('.active-pannel')

    async expectLoaded() {
        await expect(this.avalibleSurveysTab).toBeVisible();
    }
    
  
}
