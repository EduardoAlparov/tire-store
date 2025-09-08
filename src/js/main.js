import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';

import masks from './masks';
import validation from './validation';
import accordions from './accordions';
import modals from './modals';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import setHeaderPadding from './setHeaderPadding';
import openCatalog from './openCatalog';
import openMobileSearch from './openMobileSearch';
import homeSwiper from './homeSwiper';
import emailFormSubmit from './emailFormSubmit';
import typesNavbarsToggle from './typesNavbarsToggle';
import renderRating from './renderRating';
import carouselSwiper from './carouselSwiper';
import selectContol from './selectContol';
import catalogPageControl from './catalogPageControl';
import productSwiper from './productSwiper';
import counterProducts from './counterProducts';
import deleteFavorites from './deleteFavorites';

import fancybox from './fancybox';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    accordions();
    modals();
    menu();

    setHeaderPadding();
    openCatalog();
    openMobileSearch();
    homeSwiper();
    emailFormSubmit();
    typesNavbarsToggle();
    renderRating();
    carouselSwiper();
    selectContol();
    catalogPageControl();
    productSwiper();
    counterProducts();
    deleteFavorites();

    fancybox();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
