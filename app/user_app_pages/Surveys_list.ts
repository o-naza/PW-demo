import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { SideMenu } from "../user_app_components/side_bar_menu";
import { env } from "../../playwright.config";


export class Surveys extends AppPage {

    public pagePath = `${env.WEB_APP_URL}/surveylist`
    public sideMenu =  new SideMenu(this.page)
    private avalibleSurveysTab = this.page.locator('p').filter({ hasText: 'Доступні для проходження опитування' })
    private notFinishedSurveysTab = this.page.getByText('Не завершені')
    private finishedurveysTab = this.page.getByText('Завершені', { exact: true })

    async expectLoaded() {
        await expect(this.avalibleSurveysTab).toBeVisible();
        await expect(this.notFinishedSurveysTab).toBeVisible();
        await expect(this.finishedurveysTab).toBeVisible();
    }
    
  
}
