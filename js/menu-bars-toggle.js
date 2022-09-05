let menu = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
