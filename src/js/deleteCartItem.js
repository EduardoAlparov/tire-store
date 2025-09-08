export default () => {
    const cartItems = document.querySelectorAll('.js-cart-item');

    cartItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if(e.target.closest('.cart-item__delete')) {
                item.remove();
            }
        })

        item.querySelector('input[class="js-cart-item-input"]')
    })
}
