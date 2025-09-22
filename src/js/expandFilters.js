export default () => {
    const btns = document.querySelectorAll('.catalog-filters__expand');

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.previousElementSibling.classList.remove('catalog-filters__checkboxes--collapsed');
        })
    })
}
