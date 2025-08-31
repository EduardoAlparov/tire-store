import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import setHeaderPadding from './setHeaderPadding';
import openCatalog from './openCatalog';
import homeSwiper from './homeSwiper';
import emailFormSubmit from './emailFormSubmit';
import typesNavbarsToggle from './typesNavbarsToggle';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();

    setHeaderPadding();
    openCatalog();
    homeSwiper();
    emailFormSubmit();
    typesNavbarsToggle();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
