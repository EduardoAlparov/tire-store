export default () => {
	const selects = document.querySelectorAll('.js-select');

	selects.forEach((select) => {
		select.addEventListener('click', () => {
			select.classList.toggle('select--open');

			window.addEventListener('click', (e) => {
				if(!e.target.closest('.select')) {
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

				select.classList.remove('select--open');
			})
		})
	})
}
