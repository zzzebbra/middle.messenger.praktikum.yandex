import Handlebars from 'handlebars/runtime';
import './style.scss';
import button from './partials/button/button.hbs';
import modalTitle from './partials/modalTitle/modalTitle.hbs';
import profileTitle from './partials/profileTitle/profileTitle.hbs';
import input from './partials/input/input.hbs';
import link from './partials/link/link.hbs';
import avatar from './partials/avatar/avatar.hbs';
import login from './templates/login/login.hbs';
import registration from './templates/register/register.hbs';
import profile from './templates/profile/profile.hbs';
import profileText from './partials/profileText/profileText.hbs';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('modalTitle', modalTitle);
Handlebars.registerPartial('profileTitle', profileTitle);
Handlebars.registerPartial('input', input);
Handlebars.registerPartial('link', link);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('profileText', profileText);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const registrationPage = registration();
  const loginPage = login();
  const profilePage = profile();

  root.innerHTML = profilePage;
})


