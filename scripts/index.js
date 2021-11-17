const menu = document.querySelector('.header__list');
const buttonMenu = document.querySelector('.header__burger');

function menuOpen () {
    menu.classList.toggle('header__list_active');
}

buttonMenu.addEventListener('click', menuOpen);

