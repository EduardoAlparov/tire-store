export default () => {
    const tabs = document.querySelectorAll('.js-navbar-tab');

    tabs.forEach((tab)=> {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const ELEMENT_CLASS = 'selection__tab';
            const ACTIVE_CLASS = 'tab--active';
            const dataValue = tab.dataset.navbutton;
            const activeItem = tab.parentElement.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

            if (activeItem !== tab) activeItem?.classList.remove(ACTIVE_CLASS);

            tab.classList.toggle(ACTIVE_CLASS);

            if(dataValue) {
                const toggleWindows = document.querySelectorAll('[data-navwindow]');
                const WINDOW_SELECTOR = 'data-navwindow';
                const HIDING_CLASS = 'display-none';

                toggleWindows.forEach((win) => {
                    if(win.dataset.navwindow === dataValue) {
                        const hiddenItem = win.parentElement.querySelector(`[${WINDOW_SELECTOR + '=' + dataValue}].${HIDING_CLASS}`);
                        if (hiddenItem == win) hiddenItem?.classList.remove(HIDING_CLASS);
                    } else {
                        win.classList.add(HIDING_CLASS);
                    }
                })
            }
        })
    });
}
