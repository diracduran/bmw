const menuElems = document.querySelectorAll('.menu');
const humburger = document.querySelector('.humburger-menu');


menuElems.forEach(menu => {

	const toggleMenu = () => {
		menu.classList.toggle('menu-active')
		humburger.classList.toggle('humburger-menu-active');
	};

	const closeMenu = () => {
		menu.classList.remove('menu-active')		
		humburger.classList.remove('humburger-menu-active');
	}

	humburger.addEventListener('click', toggleMenu);

	menu.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('menu-list__link')) {
			closeMenu()
		}
	})
})
