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

            if(input.closest('.js-cart-item')) {
                const cartItem = input.closest('.js-cart-item');
                let cartFactor = parseFloat(cartItem.querySelector('.js-cart-item-factor').textContent);
                const cartPrice = parseFloat(cartItem.querySelector('.js-cart-item-price').textContent.replace(/\s/g, ""));
                const cartTotalPrice = cartItem.querySelector('.js-cart-item-total');

                cartFactor =
                    cartItem.querySelector('.js-cart-item-input').value;
                cartItem.querySelector('.js-cart-item-factor').textContent =
                    cartItem.querySelector('.js-cart-item-input').value;
                cartTotalPrice.textContent = (cartFactor * cartPrice).toLocaleString('ru-RU');
            }
        })
    })
}
