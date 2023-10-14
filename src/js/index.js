// import autoCompleteFunc from './modules/autocomplete';

// autoCompleteFunc();
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import { easepick } from '@easepick/core';
import { TimePlugin } from '@easepick/time-plugin';

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const picker = new easepick.create({
  element: document.getElementById('datePicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
  ],
  format: 'HH:mm, DD/MM/YY',
  plugins: [TimePlugin],
});

import swiperTestimonials from './modules/swiper_testimonials.js';
swiperTestimonials();

import swiperpopular from './modules/swiper_popular.js';
swiperpopular();

// ScrollReveal
import ScrollReveal from 'scrollreveal';
ScrollReveal({
  distance: '60px',
  duration: 2000,
});

ScrollReveal().reveal('.header', {
  origin: 'top',
});

ScrollReveal().reveal('.discover_grid', {
  origin: 'left',
});

ScrollReveal().reveal('.container-right', {
  origin: 'right',
});
