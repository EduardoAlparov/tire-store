import Swiper from 'swiper';
import { Navigation, Controller } from 'swiper';

export default () => {
    const compareSection = document.querySelector('.js-compare-carouseel');

    if(!compareSection) return;

    const productsSwiperBox = compareSection.querySelector('.comparison-section__products-swiper');
    const tablesSwiperBox = compareSection.querySelector('.comparison-section__tables-swiper');
    const removeAllBtn = compareSection.querySelector('.js-remove-all-compare');
    const compareLink = document.querySelector('.js-compare-link');

    if(productsSwiperBox && tablesSwiperBox) {

        const tablesSwiper = new Swiper(tablesSwiperBox, {
            speed: 500,
            slidesPerView: 2,
            allowTouchMove: false,

            breakpoints: {
                1201: {
                    slidesPerView: 3,
                },
            }
        })

        const productsSwiper = new Swiper(productsSwiperBox, {
            speed: 500,
            slidesPerView: 2,
            modules: [Navigation, Controller],

            navigation: {
                disabledClass: 'carousel-btn--disabled',
                nextEl: compareSection.querySelector('.comparison-section__btn-next'),
                prevEl: compareSection.querySelector('.comparison-section__btn-prev'),
            },

            breakpoints: {
                1201: {
                    slidesPerView: 3,
                },
            },

            on: {
                init: function () {
                    const initSlidesNumbers = () => {
                        for (let index = 0; index < this.slides.length; index++) {
                            const element = this.slides[index];
                            element.querySelector('.product-slide__pagination-value').textContent = index + 1;
                            element.querySelector('.product-slide__pagination-total').textContent = this.slides.length;
                        }
                    }

                    initSlidesNumbers();

                    this.slides.forEach( (slide, index) => {
                        slide.querySelector('[name="remove-from-compare"]').addEventListener('change', (e) => {
                            e.target.closest('.product-slide').remove();
                            tablesSwiper.slides[index].remove();
                            productsSwiper.update();

                            initSlidesNumbers();
                        })
                    })
                },
            },
        });

        productsSwiper.controller.control = tablesSwiper;

        const removeAllSlides = (swiper) => {
            swiper.slides.forEach((slide) => {
                slide.remove();
            })
        }

        if(removeAllBtn) {
            removeAllBtn.addEventListener('click', () => {
                removeAllSlides(productsSwiper);
                removeAllSlides(tablesSwiper);

                if(compareLink) {
                    compareLink.removeAttribute('data-counter');
                }
            })
        }
    }
}
