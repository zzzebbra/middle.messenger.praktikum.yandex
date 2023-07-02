import { Link } from '../src/partials/link/link';
import { Button } from '../src/partials/button/button';
import { Input } from '../src/partials/input/input';
import { ModalTitle } from '../src/partials/modalTitle/modalTitle';
import { Avatar } from '../src/partials/avatar/avatar';
import { ProfileTitle } from "../src/partials/profileTitle/profileTitle";
import { ProfileText } from "../src/partials/profileText/profileText";

export const linkToMain = new Link({
  url: '/',
  urlName: 'Go back to main page',
  events: {
    click: () => console.log('clicked'),
  }
})

export const modalTitleLogin = new ModalTitle({
  title: 'Login',
  events: {
    click: () => console.log('clicked'),
  }
})

export const loginInputEnabled = new Input({
  labelName: 'Login',
  type: 'text',
  name: 'login',
  events: {
    click: () => console.log('login'),
  }
})

export const passwordInput = new Input({
  labelName: 'Password',
  type: 'password',
  name: 'password',
  events: {
    click: () => console.log('pass'),
  }
})

export const buttonSubmitLogin = new Button({
  buttonText: 'Login',
  type: 'submit',
  buttonExtraClass: 'button_blue button_mr-t-160',
  events: {
    click: () => console.log('sign in'),
  }
})

export const linkJoin = new Link({
  url: '/join-us',
  urlName: 'Join us',
  events: {
    click: () => console.log('go to login'),
  }
})


export const modalTitleJoin = new ModalTitle({
  title: 'Create a profile',
  events: {
    click: () => console.log('clicked'),
  }
})

export const emailInputEnabled = new Input({
  labelName: 'Email',
  type: 'email',
  name: 'email',
  events: {
    click: () => console.log('email'),
  }
})

export const nameInputEnabled = new Input({
  labelName: 'Name',
  type: 'text',
  name: 'firstName',
  events: {
    click: () => console.log('name'),
  }
})

export const surnameInputEnabled = new Input({
  labelName: 'Surname',
  type: 'text',
  name: 'surname',
  events: {
    click: () => console.log('surname'),
  }
})

export const phoneInputEnabled = new Input({
  labelName: 'Mobile phone',
  type: 'tel',
  name: 'phone',
  events: {
    click: () => console.log('phone'),
  }
})

export const passwordRepeat = new Input({
  labelName: 'Password (repeat)',
  type: 'password',
  name: 'password-repeat',
  events: {
    click: () => console.log('pass-rep'),
  }
})

export const buttonJoin = new Button({
  buttonText: 'Sign up',
  type: 'submit',
  buttonExtraClass: 'button_blue button_mr-t-47',
  events: {
    click: () => console.log('sign in'),
  }
})

export const linkToLogin = new Link({
  url: '/login',
  urlName: 'Login',
  events: {
    click: () => console.log('go to login'),
  }
})

export const avatar = new Avatar({
  link: '/src/images/avatar.png',
  events: {
    click: () => console.log('avatar'),
  }
})

export const profileTitle = new ProfileTitle({
  title: 'Ivan',
  events: {
    click: () => console.log('profileTitle'),
  }
})

export const profileEmail = new ProfileText({
  text: 'Email',
  events: {
    click: () => console.log('profileEmail'),
  }
})

export const profileLogin = new ProfileText({
  text: 'Login',
  events: {
    click: () => console.log('profileLogin'),
  }
})

export const profileName = new ProfileText({
  text: 'Name',
  events: {
    click: () => console.log('profileName'),
  }
})

export const profileSurname = new ProfileText({
  text: 'Surname',
  events: {
    click: () => console.log('Surname'),
  }
})

export const profileChatname = new ProfileText({
  text: 'Chatname',
  events: {
    click: () => console.log('Chatname'),
  }
})

export const profileMobile = new ProfileText({
  text: 'Mobile phone',
  events: {
    click: () => console.log('profileMobile'),
  }
})

export const emailInputDisabled = new Input({
  type: 'email',
  name: 'email',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "pochta@gmail.com",
  events: {
    click: () => console.log('email'),
  }
})

export const loginInputDisabled = new Input({
  type: 'text',
  name: 'login',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "ivanivanov",
  events: {
    click: () => console.log('login'),
  }
})

export const nameInputDisabled = new Input({
  type: 'text',
  name: 'firstName',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "Ivan",
  events: {
    click: () => console.log('name'),
  }
})

export const surnameInputDisabled = new Input({
  type: 'text',
  name: 'surName',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "Ivanov",
  events: {
    click: () => console.log('surname'),
  }
})

export const displayNameInputDisabled = new Input({
  type: 'text',
  name: 'displayName',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "Ivan",
  events: {
    click: () => console.log('displayName'),
  }
})

export const phoneInputDisabled = new Input({
  type: 'tel',
  name: 'phone',
  extraClass: "input_disabled",
  disabled: 'disabled',
  placeholder: "+7(909)9673030",
  events: {
    click: () => console.log('+7(909)9673030'),
  }
})

export const buttonArrow = new Button({
  type: 'button',
  buttonExtraClass: 'button_arrow',
  events: {
    click: () => console.log('go back'),
  }
})

export const dataChangeLink = new Link({
  url: '/data-change',
  urlName: 'Change profile info',
  extraClass: "profile__link",
  events: {
    click: () => console.log('Change profile info'),
  }
})

export const passChangeLink = new Link({
  url: '/pass-change',
  urlName: 'Change password',
  extraClass: "profile__link",
  events: {
    click: () => console.log('Change password'),
  }
})

export const logoutLink = new Link({
  url: '/login',
  urlName: 'Logout',
  extraClass: "profile__link  profile__link_logout",
  events: {
    click: () => console.log('Logout'),
  }
})

export const emailInputEnabledWithPlaceholder = new Input({
  type: 'email',
  name: 'email',
  extraClass: "input_disabled",
  placeholder: "pochta@gmail.com",
  events: {
    click: () => console.log('email'),
  }
})

export const loginInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'login',
  extraClass: "input_disabled",
  placeholder: "ivanivanov",
  events: {
    click: () => console.log('login'),
  }
})

export const namenInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'firstName',
  extraClass: "input_disabled",
  placeholder: "Ivan",
  events: {
    click: () => console.log('name'),
  }
})

export const surnameInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'surName',
  extraClass: "input_disabled",
  placeholder: "Ivanov",
  events: {
    click: () => console.log('surname'),
  }
})

export const displayNameInputEnabledWithPlaceholder = new Input({
  type: 'text',
  name: 'displayName',
  extraClass: "input_disabled",
  placeholder: "Ivan",
  events: {
    click: () => console.log('displayName'),
  }
})

export const phoneInputEnabledWithPlaceholder = new Input({
  type: 'tel',
  name: 'phone',
  extraClass: "input_disabled",
  placeholder: "+7(909)9673030",
  events: {
    click: () => console.log('+7(909)9673030'),
  }
})

export const buttonSave = new Button({
  type: 'submit',
  buttonExtraClass: 'button button_blue',
  buttonText: "Save changes",
  events: {
    click: () => console.log('go back'),
  }
})

export const oldPassword = new Input({
  type: 'password',
  name: 'oldPassword',
  extraClass: "input_disabled",
  events: {
    click: () => console.log('oldPassword'),
  }
})

export const newPassword = new Input({
  type: 'password',
  name: 'newPassword',
  extraClass: "input_disabled",
  events: {
    click: () => console.log('pass'),
  }
})

export const newPasswordRepeat = new Input({
  type: 'password',
  name: 'newPasswordRepeat',
  extraClass: "input_disabled",
  events: {
    click: () => console.log('pass-rep'),
  }
})


