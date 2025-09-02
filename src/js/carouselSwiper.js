import Swiper from 'swiper';
import { Navigation } from 'swiper';

export default () => {
    const carousels = document.querySelectorAll('.js-carousels-swiper');

    carousels.forEach( (carousel) => {
        const counter = carousel.dataset.slidesCount;
        const swiper = new Swiper(carousel.querySelector('.swiper'), {
            speed: 700,
            slidesPerView: 6,
            spaceBetween: 24,
            watchSlidesProgress: true,
            modules: [Navigation],

            navigation: {
                disabledClass: 'carousel-btn--disabled',
                nextEl: carousel.querySelector('.carousel-section__btn-next'),
                prevEl: carousel.querySelector('.carousel-section__btn-prev'),
            },

            breakpoints: {
                320: {
                    slidesPerView: counter < 6 ? 1.3 : 2,
                    spaceBetween: 8
                },
                769: {
                    slidesPerView: counter / 2,
                    spaceBetween: 12
                },
                1201: {
                    slidesPerView: counter,
                    spaceBetween: 24
                },
            }
        });
    })
}
