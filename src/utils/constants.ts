import Link from '../partials/link/link';
import Button from '../partials/button/button';
import Input from '../partials/input/input';
import ModalTitle from '../partials/modalTitle/modalTitle';
import Avatar from '../partials/avatar/avatar';
import ProfileTitle from '../partials/profileTitle/profileTitle';
import ProfileText from '../partials/profileText/profileText';
import Image from '../partials/image/image';
import { formValidate, inputValidation } from './validation';
import Router from './Router';

import {
  emailRegexp, nameRegexp, surnameRegexp, loginRegexp, passwordRegexp,
  phoneRegexp, searchRegexp,
} from './regexps';

const navigation = new Router('#app');

export const linkToMain = new Link({
  url: '/',
  urlName: 'Go back to main page',
  events: {
    click: () => console.log('clicked'),
  },
});

export const modalTitleLogin = new ModalTitle({
  title: 'Login',
  events: {
    click: () => console.log('clicked'),
  },
});

export const loginInputEnabled = new Input({
  labelName: 'Login',
  type: 'text',
  name: 'login',
  validationPattern: loginRegexp,
  errorText: 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const passwordInput = new Input({
  labelName: 'Password',
  type: 'password',
  name: 'password',
  validationPattern: passwordRegexp,
  errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const buttonSubmitLogin = new Button({
  buttonText: 'Login',
  type: 'submit',
  buttonExtraClass: 'button_blue button_mr-t-160',
  events: {
    click: (evt: Event) => {
      evt.preventDefault();

      const target = evt.target as HTMLButtonElement;
      const form = target?.closest('form')!;

      const { isFormValid, formData } = formValidate(form, 'input__error_visible');

      if (!isFormValid) {
        console.log('Error');
      } else {
        console.log(formData);
      }
    },
  },
});

export const linkJoin = new Link({
  url: '/sign-up',
  urlName: 'Join us',
  events: {
    click: () => console.log('go to login'),
  },
});

export const modalTitleJoin = new ModalTitle({
  title: 'Create a profile',
  events: {
    click: () => console.log('clicked'),
  },
});

export const emailInputEnabled = new Input({
  labelName: 'Email',
  type: 'email',
  name: 'email',
  validationPattern: emailRegexp,
  errorText: 'Not a valid email',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const nameInputEnabled = new Input({
  labelName: 'Name',
  type: 'text',
  name: 'first_name',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const surnameInputEnabled = new Input({
  labelName: 'Surname',
  type: 'text',
  name: 'second_name',
  validationPattern: surnameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const phoneInputEnabled = new Input({
  labelName: 'Mobile phone',
  type: 'tel',
  name: 'phone',
  validationPattern: phoneRegexp,
  errorText: "Only numbers, start from '+', 10-15 symbols length",
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const passwordRepeat = new Input({
  labelName: 'Password (repeat)',
  type: 'password',
  name: 'password',
  validationPattern: passwordRegexp,
  errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const buttonJoin = new Button({
  buttonText: 'Sign up',
  type: 'submit',
  buttonExtraClass: 'button_blue button_mr-t-47',
  events: {
    click: () => console.log('sign in'),
  },
});

export const linkToLogin = new Link({
  url: '/',
  urlName: 'Login',
  events: {
    click: () => console.log('go to login'),
  },
});

export const avatar = new Avatar({
  link: '/src/images/avatar.png',
  events: {
    click: () => console.log('avatar'),
  },
});

export const profileTitle = new ProfileTitle({
  title: 'Ivan',
  events: {
    click: () => console.log('profileTitle'),
  },
});

export const profileEmail = new ProfileText({
  text: 'Email',
  events: {
    click: () => console.log('profileEmail'),
  },
});

export const profileLogin = new ProfileText({
  text: 'Login',
  events: {
    click: () => console.log('profileLogin'),
  },
});

export const profileName = new ProfileText({
  text: 'Name',
  events: {
    click: () => console.log('profileName'),
  },
});

export const profileSurname = new ProfileText({
  text: 'Surname',
  events: {
    click: () => console.log('Surname'),
  },
});

export const profileChatname = new ProfileText({
  text: 'Chatname',
  events: {
    click: () => console.log('Chatname'),
  },
});

export const profileMobile = new ProfileText({
  text: 'Mobile phone',
  events: {
    click: () => console.log('profileMobile'),
  },
});

export const emailInputDisabled = new Input({
  type: 'email',
  name: 'email',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: 'pochta@gmail.com',
  validationPattern: emailRegexp,
  errorText: 'Not a valid email',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const loginInputDisabled = new Input({
  type: 'text',
  name: 'login',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: 'ivanivanov',
  validationPattern: loginRegexp,
  errorText: '3-20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы - и _)',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const nameInputDisabled = new Input({
  type: 'text',
  name: 'first_name',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: 'Ivan',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const surnameInputDisabled = new Input({
  type: 'text',
  name: 'second_name',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: 'Ivanov',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const displayNameInputDisabled = new Input({
  type: 'text',
  name: 'display_name',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: 'Ivan',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const phoneInputDisabled = new Input({
  type: 'tel',
  name: 'phone',
  extraClass: 'input_disabled',
  disabled: 'disabled',
  placeholder: '+7(909)9673030',
  validationPattern: phoneRegexp,
  errorText: "Only numbers, start from '+', 10-15 symbols length",
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const buttonArrow = new Button({
  type: 'button',
  buttonExtraClass: 'button_arrow',
  events: {
    // click: () => console.log('go back'),
    click: () => navigation.back(),
  },
});

export const dataChangeLink = new Link({
  url: '/data-change',
  urlName: 'Change profile info',
  extraClass: 'profile__link',
  events: {
    click: () => console.log('Change profile info'),
  },
});

export const passChangeLink = new Link({
  url: '/pass-change',
  urlName: 'Change password',
  extraClass: 'profile__link',
  events: {
    click: () => console.log('Change password'),
  },
});

export const logoutLink = new Link({
  url: '/',
  urlName: 'Logout',
  extraClass: 'profile__link  profile__link_logout',
  events: {
    click: () => console.log('Logout'),
  },
});

export const emailInputEnabledWithPlaceholder = new Input({
  type: 'email',
  name: 'email',
  extraClass: 'input_disabled',
  placeholder: 'pochta@gmail.com',
  validationPattern: emailRegexp,
  errorText: 'Not a valid email',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const loginInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'login',
  extraClass: 'input_disabled',
  placeholder: 'ivanivanov',
  validationPattern: loginRegexp,
  errorText: '3-20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы - и _)',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const nameInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'first_name',
  extraClass: 'input_disabled',
  placeholder: 'Ivan',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const surnameInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'second_name',
  extraClass: 'input_disabled',
  placeholder: 'Ivanov',
  validationPattern: surnameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const displayNameInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'display_name',
  extraClass: 'input_disabled',
  placeholder: 'Ivan',
  validationPattern: nameRegexp,
  errorText: 'Should be latin or cyrillic, first letter uppercase, no space, numbers and special characters',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const phoneInputEnabledWithPlaceholder = new Input({
  type: 'tel',
  name: 'phone',
  extraClass: 'input_disabled',
  placeholder: '+7(909)9673030',
  validationPattern: phoneRegexp,
  errorText: "Only numbers, start from '+', 10-15 symbols length",
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const buttonSave = new Button({
  type: 'submit',
  buttonExtraClass: 'button button_blue',
  buttonText: 'Save changes',
  events: {
    // click: () => console.log('go back'),
    click: () => navigation.back(),
  },
});

export const oldPassword = new Input({
  type: 'password',
  name: 'password',
  extraClass: 'input_disabled',
  validationPattern: passwordRegexp,
  errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const newPassword = new Input({
  type: 'password',
  name: 'password',
  extraClass: 'input_disabled',
  validationPattern: passwordRegexp,
  errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const newPasswordRepeat = new Input({
  type: 'password',
  name: 'password',
  extraClass: 'input_disabled',
  validationPattern: passwordRegexp,
  errorText: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const linkToProfile = new Link({
  url: '/settings',
  urlName: 'Profile',
  extraClass: 'chatWindow__link',
  events: {
    click: () => console.log('clicked'),
  },
});

export const arrowProfile = new Button({
  type: 'button',
  buttonExtraClass: 'chatWindow__image',
  events: {
    // click: () => console.log('go back'),
    click: () => navigation.back(),
  },
});

export const searchChatsInput = new Input({
  type: 'text',
  name: 'search',
  extraClass: 'chatWindow__search',
  placeholder: 'Search',
  validationPattern: searchRegexp,
  errorText: '',
  events: {
    focusout: (evt: Event) => {
      const input = evt.target as HTMLInputElement;
      inputValidation(input, 'input__error_visible');
    },
  },
});

export const chatAvatar = new Image({
  link: '/src/images/avatar.png',
  extraImageClass: 'chatWindow_img',
  events: {
    click: () => console.log('avatar'),
  },
});

export const chatRecName = new ProfileText({
  text: 'Andrew',
  events: {
    click: () => console.log('profileEmail'),
  },
});

export const chatMessage = new ProfileText({
  text: 'Друзья, у меня для вас особенный выпуск новостей!...',
  events: {
    click: () => console.log('profileEmail'),
  },
});
