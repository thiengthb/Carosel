import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
    allowTouchMove: true,
    keyboard: {
      enable: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
    },
});

var swiperContainer = document.querySelector('.swiper');

swiperContainer.addEventListener('mouseenter', function() {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', function() {
  swiper.autoplay.start();
});