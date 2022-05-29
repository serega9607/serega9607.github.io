let preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
preloader.classList.add ('hide');
setTimeout(() => {
	preloader.remove();
}, 6000);
} );