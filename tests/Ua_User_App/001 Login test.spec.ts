import { test } from '@playwright/test';
import { WebPanel } from '../../app';
import { API } from '../../api/API_web_app';
import { generateUser } from '../../testData/registerNewUserData';

test('New user can login with Email address', { tag: ['@Smoke'] }, async ({ page }) => {
  const user = generateUser();
  await new API().registerNewUser(user);
  const app = new WebPanel(page);
  await app.signIn.open();
  await app.signIn.viaEmail(user);
  await app.profile.userEmailIsVisible(user);
});
