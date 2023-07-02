import './style.scss';

import { NotFoundPage } from "./templates/notFound/notFound";
import { LoginPage } from './templates/login/login';
import { RegisterPage } from './templates/register/register';
import { ProfilePage } from './templates/profile/profile';
import { ProfileChangePage } from './templates/profile-change/profileChange';
import { PasswordChangePage } from './templates/password-change/passwordChange';
import { ServerErrorPage } from './templates/serverError/serverError';
import { linkToMain, modalTitleLogin, loginInputEnabled, passwordInput, buttonSubmitLogin, linkJoin, modalTitleJoin,
  emailInputEnabled, nameInputEnabled, surnameInputEnabled, phoneInputEnabled, passwordRepeat, buttonJoin, linkToLogin,
  avatar, profileTitle, profileEmail, profileChatname, profileLogin, profileName, profileSurname, profileMobile,
  emailInputDisabled, loginInputDisabled, nameInputDisabled, surnameInputDisabled,  displayNameInputDisabled,
  phoneInputDisabled, buttonArrow, dataChangeLink, passChangeLink, logoutLink, emailInputEnabledWithPlaceholder,
  loginInputEnabledWithPlaceholder, namenInputEnabledWithPlaceholder, surnameInputEnabledWithPlaceholder,
  displayNameInputEnabledWithPlaceholder, phoneInputEnabledWithPlaceholder, buttonSave, oldPassword, newPassword, newPasswordRepeat, linkToProfile, arrowProfile, searchChatsInput,

 } from '../utils/constants'
import { ChatWindowPage } from './templates/chatWindow/chatWindow';

const renderDOM = (page, props: Record<string, unknown>) => {
  window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root!.innerHTML = '';

    const renderPage = new page({ title: '', ...props });

    root?.append(renderPage.getContent());

    renderPage.dispatchComponentDidMount();
  })
}

const getCurrentPage = () => {
  switch (window.location.pathname) {
    case '/login':
      return renderDOM(LoginPage, { modalTitleLogin, loginInputEnabled, passwordInput, buttonSubmitLogin, linkJoin });
    case '/join-us':
      return renderDOM(RegisterPage, { modalTitleJoin, emailInputEnabled, loginInputEnabled, nameInputEnabled, surnameInputEnabled,
        phoneInputEnabled, passwordInput, passwordRepeat, buttonJoin, linkToLogin });
    case '/profile':
      return renderDOM(ProfilePage, { avatar, profileTitle, profileEmail, profileLogin, profileName, profileSurname,
        profileChatname, profileMobile, emailInputDisabled, loginInputDisabled, nameInputDisabled, surnameInputDisabled,
        displayNameInputDisabled, phoneInputDisabled, buttonArrow, dataChangeLink, passChangeLink, logoutLink  });
    case '/data-change':
      return renderDOM(ProfileChangePage, { avatar, profileTitle, profileEmail, profileLogin, profileName, profileSurname,
        profileChatname, profileMobile, emailInputEnabledWithPlaceholder, loginInputEnabledWithPlaceholder, namenInputEnabledWithPlaceholder,
        surnameInputEnabledWithPlaceholder, displayNameInputEnabledWithPlaceholder, phoneInputEnabledWithPlaceholder, buttonSave });
    case '/pass-change':
      return renderDOM(PasswordChangePage, { avatar, profileTitle, profileEmail, profileLogin, profileName, buttonSave,
        buttonArrow, oldPassword, newPassword, newPasswordRepeat });
    case '/404':
      return renderDOM(NotFoundPage, { linkToMain });
    case '/500':
      return renderDOM(ServerErrorPage, { linkToMain });

    default:
      return renderDOM(ChatWindowPage, { linkToProfile, arrowProfile, searchChatsInput });
  }
}

getCurrentPage();
