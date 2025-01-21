import { newUserLogin } from '../../fixtures/basic.fixture.Web';

  newUserLogin('New user can open survey page', { tag: ['@Smoke'] }, async ({ app, newUser }) => {
    await app.profile.open();
    await app.profile.sideMenu.openSurveyListPage();
    await app.surveys.expectLoaded();
  });
  