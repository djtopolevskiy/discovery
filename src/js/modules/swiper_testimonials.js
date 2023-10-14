import Swiper from 'swiper';
import 'swiper/css/bundle';

function swiperfunc() {
  const swiper1 = new Swiper('#testimonials-col-1', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper('#testimonials-col-2', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 4200,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  });

  const swiper3 = new Swiper('#testimonials-col-3', {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 4700,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  });
}

export default swiperfunc;
