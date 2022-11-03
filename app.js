const btnMenu = document.querySelector('#btn-menu');
const navBar = document.querySelector('#navbar-default');

btnMenu.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
})
