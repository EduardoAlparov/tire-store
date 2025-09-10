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

        if(isMobile && selectionWrapper && selectionWrapperMobile) {
            moveBlockOnMobile(selectionWrapper, selectionWrapperMobile);
        }

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
        })
    })
}
