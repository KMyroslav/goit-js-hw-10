import menuCards from '../menu.json';
import menuCardsTpl from '../templates/menu-cards.hbs';

const menuList = document.querySelector('.js-menu');
const themeBtn = document.querySelector('#theme-switch-toggle');
const documentBody = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuList.insertAdjacentHTML('beforeend', menuCardsTpl(menuCards));

if (localStorage.getItem('theme') === Theme.DARK) {
  documentBody.classList.add(Theme.DARK);
  themeBtn.setAttribute('checked', 'true');
}

themeBtn.addEventListener('change', onThemeChange);

function onThemeChange() {
  if (documentBody.classList.contains(Theme.DARK)) {
    documentBody.classList.add(Theme.LIGHT);
    documentBody.classList.remove(Theme.DARK);
    localStorage.setItem('theme', `${Theme.LIGHT}`);
  } else {
    documentBody.classList.add(Theme.DARK);
    documentBody.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', `${Theme.DARK}`);
  }
}
