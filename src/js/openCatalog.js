export default () => {
    const catalogBtns = document.querySelectorAll('.js-open-catalog');
    const innersCatalogBtns = document.querySelectorAll('.js-catalog-button');

    catalogBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            document.body.classList.toggle('catalog-is-open');

            document.addEventListener('click', (e) => {
                if(!e.target.closest('.page-header__catalog') && !e.target.closest('.page-header__catalog-open')) {
                    document.body.classList.remove('catalog-is-open');
                }
            })
        })
    })

    innersCatalogBtns.forEach( (innerBtn) => {
        innerBtn.addEventListener('mouseenter', (e) => {
            e.preventDefault();

            innerBtn.click();

            const ELEMENT_CLASS = 'header-catalog__button';
            const ACTIVE_CLASS = 'header-catalog__button--active';
            const activeItem = innerBtn.parentElement.parentElement.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== innerBtn) activeItem?.classList.remove(ACTIVE_CLASS);

            innerBtn.classList.toggle(ACTIVE_CLASS);
        })
    })
}
