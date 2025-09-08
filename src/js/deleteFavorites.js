export default () => {
    const favorites = document.querySelectorAll('.js-favorites');

    favorites.forEach((favorite) => {
        const cardInputs = favorite.querySelectorAll('input[type="checkbox"][name="add-to-favorite"]');

        cardInputs.forEach((input) => {
            input.addEventListener('change', (e) => {
                e.target.closest('.catalog-window__card').parentElement.remove();

                if(favorite.querySelectorAll('.catalog-window__card').length < 1) {
                    favorite.remove()
                }
            })
        })
    })
}
