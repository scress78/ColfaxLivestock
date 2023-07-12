let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	menu.classList.toggle('open');
};