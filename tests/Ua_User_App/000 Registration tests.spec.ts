import { test } from '@playwright/test';
import { WebPanel } from '../../app';
import { generateUser } from '../../testData/registerNewUserData';

test('User can register with Email address', { tag: ['@Smoke'] }, async ({ page }) => {
  const user = generateUser();
  const app = new WebPanel(page);
  await app.signUp.open();
  await app.signUp.viaEmail(user);
  await app.profile.userEmailIsVisible(user);
});


