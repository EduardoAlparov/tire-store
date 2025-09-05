import Swiper from 'swiper';
import { EffectFade, Pagination, FreeMode, Thumbs } from 'swiper';

export default () => {
    const isMobile = window.matchMedia("(width < 1024px)").matches;
    const productCarousels = document.querySelectorAll('.js-product-carousel');

    productCarousels.forEach( (productCarousel) => {
        const thumbs = productCarousel.querySelector('.js-carousels-thumbs');
        const main = productCarousel.querySelector('.product-carousel__main-swiper')
        let thumbsSwiper;

        if(thumbs) {
            thumbsSwiper = new Swiper(thumbs, {
                speed: 200,
                width: '200',
                modules: [ FreeMode  ],
                spaceBetween: 8,
                slidesPerView: 2,
                freeMode: true,
                watchSlidesProgress: true,
            });
        }

        const swiper = new Swiper(main, {
            speed: isMobile ? 600 : 200,
            modules: [ EffectFade, Pagination, Thumbs ],
            slidePerView: 1,

            effect: isMobile ? 'slide' : 'fade',

            fadeEffect: {
                crossFade: true
            },

            thumbs: {
                swiper: thumbsSwiper
            },

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    })
}
