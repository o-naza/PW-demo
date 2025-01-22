import { PageHolder } from "./abstractClasses";
import { Profile } from "./user_app_pages/ProfilePage";
import { SignUp } from "./user_app_pages/RegistrationPage";
import { SignIn } from "./user_app_pages/LoginPage";
import { Surveys } from "./user_app_pages/SurveysListPage";

export class WebPanel extends PageHolder {
  public signUp = new SignUp(this.page);
  public profile = new Profile(this.page);
  public signIn = new SignIn(this.page);
  public surveys = new Surveys(this.page);
}
