import Swiper from 'swiper';
import { EffectCreative, Navigation, Pagination, Controller } from 'swiper';

export default () => {
    const homeCarousels = document.querySelectorAll('.js-home-swiper');

    homeCarousels.forEach( (homeCarousel) => {
        const innerCarousel = homeCarousel.querySelector('.js-home-secondary-swiper');
        let innerSwiper;

        if(innerCarousel) {
            innerSwiper = new Swiper(innerCarousel, {
                speed: 800,
                allowTouchMove: false,
                modules: [EffectCreative],

                effect: 'creative',
                creativeEffect: {
                    prev: {
                        opacity: 0,
                        translate: [0, '-50%', 0],
                    },
                    next: {
                        opacity: 0,
                        translate: [0, '50%', 0],
                    },
                },
            });
        }

        const swiper = new Swiper(homeCarousel, {
            speed: 800,
            modules: [EffectCreative, Navigation, Pagination, Controller],

            // effect: 'creative',
            // creativeEffect: {
            //     perspective: true,
            //     prev: {
            //         opacity: 0,
            //         scale: 0.8
            //     },
            //     next: {
            //         opacity: 0,
            //         scale: 0.8
            //     },
            // },

            navigation: {
                disabledClass: 'carousel-btn--disabled',
                nextEl: homeCarousel.querySelector('.home__swiper-btn.carousel-btn--next'),
                prevEl: homeCarousel.querySelector('.home__swiper-btn.carousel-btn--prev'),
            },

            pagination: {
                el: '.home__swiper-pagination',
                type: 'bullets',
            },

            controller: {
                inverse: false,
                control: innerSwiper
            },

            breakpoints: {
                1201: {

                },
            }
        });
    })
}
