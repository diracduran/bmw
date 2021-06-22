const tabsHandlers = document.querySelectorAll('[data-tabs-handler]');
const tabsFields = document.querySelectorAll('[data-tabs-field]');


for (const tab of tabsHandlers) {
	tab.addEventListener('click', () => {
		tabsHandlers.forEach(item => {
			if (tab === item) {
				item.classList.add('design-list__item_active');
			} else {
				item.classList.remove('design-list__item_active');
			}
		})

		tabsFields.forEach(item => {
			if (item.dataset.tabsField === tab.dataset.tabsHandler) {
				item.classList.remove('hidden');
			} else {
				item.classList.add('hidden');
			}
		})
	})
}