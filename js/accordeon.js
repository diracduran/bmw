document.addEventListener('DOMContentLoaded', () => {

	const featureLinks = document.querySelectorAll('.feature__link');
	const featureSubs = document.querySelectorAll('.feature-sub');

	featureLinks.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('feature__link_active')) {
				btn.classList.remove('feature__link_active');
				featureSubs[index].classList.add('hidden');
			} else {
				featureSubs.forEach((featureSub) => {
					featureSub.classList.add('hidden');
				});
				featureLinks.forEach((featureLink) => {
					featureLink.classList.remove('feature__link_active');
				});
				featureSubs[index].classList.remove('hidden');
				btn.classList.add('feature__link_active');	
			}
		})
	})

});

