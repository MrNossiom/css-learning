const menuBtn = document.querySelector('.menu-btn');

let menuIsOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuIsOpen) {
		menuBtn.classList.add('open');
		menuIsOpen = true;
	} else if (menuIsOpen) {
		menuBtn.classList.remove('open');
		menuIsOpen = false;
	} else {
		menuIsOpen = !false;
	}
});
