import Handlebars from 'handlebars/runtime';
import './style.scss';
import button from './partials/button/button.hbs';
import greetings from './templates/greetings.hbs';

Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const result = greetings({username: 'Ryzik'});

  root.innerHTML = result;
})


