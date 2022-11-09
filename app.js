const btnMenu = document.querySelector('#btn-menu');
const navBar = document.querySelector('#navbar-default');
const enlaces = document.querySelectorAll('#navbar-default a');

btnMenu.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
});

console.log(enlaces);

enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        enlaces.forEach(enlace => {
            enlace.classList.remove('md:text-blue-700');
        });
        enlace.classList.add('md:text-blue-700');
    })
})
