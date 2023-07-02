import './style.scss';

import { NotFoundPage } from './templates/notFound/notFound';
import { LoginPage } from './templates/login/login';
import { RegisterPage } from './templates/register/register';
import { ProfilePage } from './templates/profile/profile';
import { ProfileChangePage } from './templates/profile-change/profileChange';
import { PasswordChangePage } from './templates/password-change/passwordChange';
import { ServerErrorPage } from './templates/serverError/serverError';
import { ChatWindowPage } from './templates/chatWindow/chatWindow';
import {
  linkToMain, modalTitleLogin, loginInputEnabled, passwordInput, buttonSubmitLogin, linkJoin, modalTitleJoin,
  emailInputEnabled, nameInputEnabled, surnameInputEnabled, phoneInputEnabled, passwordRepeat, buttonJoin, linkToLogin,
  avatar, profileTitle, profileEmail, profileChatname, profileLogin, profileName, profileSurname, profileMobile,
  emailInputDisabled, loginInputDisabled, nameInputDisabled, surnameInputDisabled, displayNameInputDisabled,
  phoneInputDisabled, buttonArrow, dataChangeLink, passChangeLink, logoutLink, emailInputEnabledWithPlaceholder,
  loginInputEnabledWithPlaceholder, nameInputEnabledWithPlaceholder, surnameInputEnabledWithPlaceholder,
  displayNameInputEnabledWithPlaceholder, phoneInputEnabledWithPlaceholder,
  buttonSave, oldPassword, newPassword, newPasswordRepeat,
  linkToProfile, arrowProfile, searchChatsInput, chatAvatar, chatRecName, chatMessage,

} from '../utils/constants';

// не могу использовать тут другой тип, т.к. возвращается из функций всё время разное
const renderDOM = (Page: any, props: Record<string, unknown>): void => {
  window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root!.innerHTML = '';

    const renderPage = new Page({ title: '', ...props });

    root?.append(renderPage.getContent());

    renderPage.dispatchComponentDidMount();
  });
};

const getCurrentPage = (): void => {
  switch (window.location.pathname) {
    case '/login':
    { renderDOM(LoginPage, {
      modalTitleLogin, loginInputEnabled, passwordInput, buttonSubmitLogin, linkJoin,
    }); return; }
    case '/join-us':
    { renderDOM(RegisterPage, {
      modalTitleJoin,
      emailInputEnabled,
      loginInputEnabled,
      nameInputEnabled,
      surnameInputEnabled,
      phoneInputEnabled,
      passwordInput,
      passwordRepeat,
      buttonJoin,
      linkToLogin,
    }); return; }
    case '/profile':
    { renderDOM(ProfilePage, {
      avatar,
      profileTitle,
      profileEmail,
      profileLogin,
      profileName,
      profileSurname,
      profileChatname,
      profileMobile,
      emailInputDisabled,
      loginInputDisabled,
      nameInputDisabled,
      surnameInputDisabled,
      displayNameInputDisabled,
      phoneInputDisabled,
      buttonArrow,
      dataChangeLink,
      passChangeLink,
      logoutLink,
    }); return; }
    case '/data-change':
    { renderDOM(ProfileChangePage, {
      avatar,
      profileTitle,
      profileEmail,
      profileLogin,
      profileName,
      profileSurname,
      profileChatname,
      profileMobile,
      emailInputEnabledWithPlaceholder,
      loginInputEnabledWithPlaceholder,
      nameInputEnabledWithPlaceholder,
      surnameInputEnabledWithPlaceholder,
      displayNameInputEnabledWithPlaceholder,
      phoneInputEnabledWithPlaceholder,
      buttonSave,
    }); return; }
    case '/pass-change':
    { renderDOM(PasswordChangePage, {
      avatar,
      profileTitle,
      profileEmail,
      profileLogin,
      profileName,
      buttonSave,
      buttonArrow,
      oldPassword,
      newPassword,
      newPasswordRepeat,
    }); return; }
    case '/404':
    { renderDOM(NotFoundPage, { linkToMain }); return; }
    case '/500':
    { renderDOM(ServerErrorPage, { linkToMain }); return; }

    default:
    { renderDOM(ChatWindowPage, {
      linkToProfile,
      arrowProfile,
      searchChatsInput,
      chatAvatar,
      chatMessage,
      chatRecName,
    }); }
  }
};

getCurrentPage();
