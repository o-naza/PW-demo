import { test } from "@playwright/test";
import { API } from "../api/API_web_app";
import { WebPanel } from "../app";
import { generateUser } from "../testData/registerNewUserData";

export const baseFixture = test.extend<{
  app: WebPanel;
}>({
  app: async ({ page }, use) => {
    const app = new WebPanel(page);
    await use(app);
  },
});

export const newUserLogin = baseFixture.extend<{
  newUser: { access_token: string };
}>({
  newUser: async ({ app, page }, use) => {
    await app.signIn.open();
    const user = generateUser();
    await new API().registerNewUser(user);
    const { access: access_token, refresh: refresh_token } =
      await new API().login(user);
    await page.evaluate(
      ({ access_token, refresh_token }) => {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
      },
      { access_token, refresh_token }
    );
    await use({ access_token });
  },
});
