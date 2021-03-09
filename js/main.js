const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--prev',
    prevEl: '.slider-button--next',
  },
  effect: 'slide',
});