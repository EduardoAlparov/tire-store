export default () => {
    const counters = document.querySelectorAll('.js-order-counter');

    counters.forEach((counter) => {
        counter.addEventListener('click', (e) => {
            const input = counter.querySelector('input[type="number"]');

            if(e.target.closest('.ordering-controls__minus') && (input.value > 1)) {
                input.value = +input.value - 1;
            } else if (e.target.closest('.ordering-controls__plus') && input.value <= 98) {
                input.value = +(input.value) + 1;
            }
        })
    })
}
