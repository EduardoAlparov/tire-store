export default () => {
    const emailForms = document.querySelectorAll('.js-email-form');

    emailForms.forEach((form) => {
        form.onsubmit = (event) => {
            event.preventDefault();

            const formParent = form.closest('.subscription__body');
            const formEmailInput = form.querySelector('input[type="email"]');

            if(!formParent) return;

            formParent.classList.add('subscription--is-validate');
            formEmailInput.value = '';

            const btn = formParent.querySelector('.subscription__button--reset');

            if(btn) {
                btn.addEventListener('click', () => {
                    formParent.classList.remove('subscription--is-validate');
                })
            }
        }
    })
}
