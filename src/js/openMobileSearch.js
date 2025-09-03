export default () => {
    const searchBtns = document.querySelectorAll('.js-mobile-search');
    const search = document.querySelector('.page-header input[type="search"]')

    searchBtns.forEach((btn) => {
        btn.addEventListener('click', () =>{
            document.body.classList.toggle('mobile-search-open');

            document.addEventListener('click', (e) => {
                if(!e.target.closest('.page-header') && !e.target.closest('.page-header__search-bar')) {
                    document.body.classList.remove('mobile-search-open');

                    if(search) {
                        search.value = '';
                    }
                }
            })
        })
    })
}
