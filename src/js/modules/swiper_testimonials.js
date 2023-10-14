import Swiper from 'swiper';
import 'swiper/css/bundle';

function swiperfunc() {
  const config = {
    direction: 'vertical',
    slidesPerView: 'auto',
    // spaceBetween: 32,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
    },
  };

  const swiper1 = new Swiper('#testimonials-col-1', config);

  const swiper2 = new Swiper('#testimonials-col-2', config);

  const swiper3 = new Swiper('#testimonials-col-3', config);
}

export default swiperfunc;
