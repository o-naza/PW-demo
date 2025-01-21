import { PageHolder } from "./abstractClasses";
import { Profile } from "./user_app_pages/Profile";
import { SignUp } from "./user_app_pages/Register";
import { SignIn } from "./user_app_pages/Login";
import { Surveys } from "./user_app_pages/Surveys_list";

export class WebPanel extends PageHolder {
  public signUp = new SignUp(this.page);
  public profile = new Profile(this.page);
  public signIn = new SignIn(this.page);
  public surveys = new Surveys(this.page);
}
