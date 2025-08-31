export default () => {
    const tabs = document.querySelectorAll('.js-navbar-tab');

    tabs.forEach((tab)=> {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const ELEMENT_CLASS = 'selection__tab';
            const ACTIVE_CLASS = 'tab--active';

            const activeItem = tab.parentElement.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== tab) activeItem?.classList.remove(ACTIVE_CLASS);

            tab.classList.toggle(ACTIVE_CLASS);
        })
    });
}
