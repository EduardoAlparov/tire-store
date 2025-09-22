export default () => {
    const catalogs = document.querySelectorAll('.js-catalog');
    const isMobile = window.matchMedia("(width < 1024px)").matches;

    const creatSelectionTab = (text) => {
        const tab = document.createElement('div');
        tab.classList.add('catalog-window__selection-item');
        tab.classList.add('selection-item');
        tab.dataset.check = text;

        tab.innerHTML = `
            <div class="selection-item__value">
                ${text}
            </div>
            <svg aria-hidden="true" class="selection-item__icon">
                <use xlink:href="#bx-close"></use>
            </svg>`;

        return tab;
    };

    const removeAllChildren = (parent) => {
      while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
      }
    };

    const moveBlockOnMobile = (sourceElement, targetElement) => {
        const clonedNode = sourceElement.cloneNode(true);
        targetElement.appendChild(clonedNode);
        sourceElement.remove();
    };

    catalogs.forEach((catalog) => {
        const selectionWrapper = catalog.querySelector('.catalog-window__selection');
        const selectionWrapperMobile = catalog.querySelector('.catalog-filters__selection');
        const sortingSelect = catalog.querySelector('.catalog-window__sorting');
        const sortingMobileBtn = catalog.querySelector('.catalog-nav__button--sorting').parentElement;

        if(isMobile && selectionWrapper && selectionWrapperMobile) {
            moveBlockOnMobile(selectionWrapper, selectionWrapperMobile);
        }

        if(isMobile && sortingSelect && sortingMobileBtn) {
            moveBlockOnMobile(sortingSelect, sortingMobileBtn);
        }

        sortingMobileBtn.addEventListener('click', () => {
            const sortingBtn = sortingMobileBtn.querySelector('.catalog-window__select.js-select');

            sortingBtn.click()
        })

        const filtersForm = catalog.querySelector('.grid-layout__catalog-filters.catalog-filters');
        const selectionList = catalog.querySelector('.catalog-window__selection-list');
        const inputs = catalog.querySelectorAll('.checkbox__input');

        inputs.forEach(input => {
            input.addEventListener('change', () =>{
                const filter = input.closest('.catalog-filters__item').id;
                const elExist = document.querySelector(`[data-check="${input.value}"]`);

                if(input.checked && input.value) {
                    selectionList.prepend(creatSelectionTab(input.value));
                } else if (!input.checked && elExist) {
                    elExist.remove();
                }
            })
        })

        if(filtersForm) {
            filtersForm.addEventListener('reset', () => {
                removeAllChildren(selectionList);
            })
        }

        catalog.addEventListener('click', (event) => {
            if(event.target.closest('.catalog-window__selection-item')) {
                const tab = event.target.closest('.catalog-window__selection-item');
                const dataCheck = tab.dataset.check;
                const checkbox = document.querySelector(`input[value="${dataCheck}"]`);

                if(checkbox) {
                    checkbox.checked = false;
                }

                tab.remove();
            }

            if(event.target.closest('.catalog-nav__button--filter')) {
                document.body.classList.add('catalog-filters-is-open');
            }

            if(event.target.closest('.catalog-nav__button--sorting')) {
                const sortingBtn = catalog.querySelector('.catalog-window__select.js-select');
                sortingBtn.classList.add('select--open');

                window.addEventListener('click', (e) => {
                    if( isMobile && (e.target.closest('.select__header-close') ||
                    e.target.closest('.select__accept')) ){
                        sortingBtn.classList.remove('select--open');
                    }
                })
            }

            if(event.target.closest('.catalog-filters__reset') && isMobile) {
                document.body.classList.remove('catalog-filters-is-open');
            }
        })
    })
}
