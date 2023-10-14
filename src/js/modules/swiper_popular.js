import Swiper from 'swiper';
import 'swiper/css/bundle';

function swiperpopular() {
  const swiper = new Swiper('#swiper_popular', {
    slidesPerView: 1,
    spaceBetween: 32,
    // outerWidth: 304,
    breakpoints: {
      430: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      790: {
        slidesPerView: 3.5,
        spaceBetween: 25,
      },
      1230: {
        slidesPerView: 3.5,
        spaceBetween: 35,
      },
    },

    navigation: {
      nextEl: '.popular_btn_item_2',
      prevEl: '.popular_btn_item_1',
    },
  });
}

export default swiperpopular;
