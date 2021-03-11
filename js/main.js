const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: 'slide',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  effect: 'slide',

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});