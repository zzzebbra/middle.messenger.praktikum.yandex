import Handlebars from 'handlebars/runtime';
import './style.scss';
import button from './partials/button/button.hbs';
import modalTitle from './partials/modalTitle/modalTitle.hbs';
import profileTitle from './partials/profileTitle/profileTitle.hbs';
import input from './partials/input/input.hbs';
import link from './partials/link/link.hbs';
import avatar from './partials/avatar/avatar.hbs';
import profileText from './partials/profileText/profileText.hbs';
import login from './templates/login/login.hbs';
import registration from './templates/register/register.hbs';
import profile from './templates/profile/profile.hbs';
import profileChange from './templates/profile-change/profile-change.hbs';
import passwordChange from './templates/password-change/password-change.hbs';
import main from './templates/main/main.hbs';
import notFound from './templates/404/404.hbs';
import serverError from './templates/500/500.hbs';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('modalTitle', modalTitle);
Handlebars.registerPartial('profileTitle', profileTitle);
Handlebars.registerPartial('input', input);
Handlebars.registerPartial('link', link);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('profileText', profileText);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  root!.innerHTML = '';

  const mainPage = main();
  const registrationPage = registration();
  const loginPage = login();
  const profilePage = profile();
  const profileChangePage = profileChange();
  const passwordChangePage = passwordChange();
  const notFoundPage = notFound();
  const serverErrorPage = serverError();

  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case '/login':
        return root!.innerHTML = loginPage;
      case '/join-us':
        return root!.innerHTML = registrationPage;
      case '/profile':
        return root!.innerHTML = profilePage;
      case '/data-change':
        return root!.innerHTML = profileChangePage;
      case '/pass-change':
        return root!.innerHTML = passwordChangePage;
      case '/404':
        return root!.innerHTML = notFoundPage;
      case '/500':
        return root!.innerHTML = serverErrorPage;

      default:
        return root!.innerHTML = mainPage;
    }
  }

  getCurrentPage();
})


