let main = document.querySelector('.hero');
let nav = document.querySelector('.nav');

let offset = main.offsetHeight - nav.offsetHeight;

window.onscroll = function () {
    if (window.pageYOffset > offset) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');
    }
}
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});