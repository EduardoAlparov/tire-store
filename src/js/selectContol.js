export default () => {
	const selects = document.querySelectorAll('.js-select');

	selects.forEach((select) => {
		select.addEventListener('click', () => {
			select.classList.add('select--open');

			window.addEventListener('click', (e) => {
				if(  (!e.target.closest('.select__current') || !e.target.closest('.select') || e.target.closest('.select__header-close') || e.target.closest('.select__accept'))) {
					selects.forEach((select) => {
						select.classList.remove('select--open');
					})
				}
			})
		})
	})

	selects.forEach((select) => {
		const inputs = select.querySelectorAll('input[type="radio"]');
		const current = select.querySelector('.select__current');

		inputs.forEach((input) => {
			input.addEventListener('input', (e) => {
				const text = e.target.nextElementSibling.textContent;
				current.textContent = text;

				// select.classList.remove('select--open');
			})
		})
	})
}
