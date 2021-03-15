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

$('.parallax-window').parallax({imageSrc: 'img/newsletter-bg.jpg'});

let cardIntroduce = document.querySelector('.hotel-card__introduce')
let cardIntroduceHeight = getComputedStyle(cardIntroduce).height

function endPoints() {
  if (parseInt(cardIntroduceHeight) > 175) {
    do {
      cardIntroduce.textContent = cardIntroduce.textContent.slice(0, cardIntroduce.textContent.length - 10)
      cardIntroduceHeight = getComputedStyle(cardIntroduce).height
    } while (parseInt(cardIntroduceHeight) > 175)
    while (cardIntroduce.textContent[cardIntroduce.textContent.length - 1] === ' ' ||
        cardIntroduce.textContent[cardIntroduce.textContent.length - 1] === '.') {
      cardIntroduce.textContent = cardIntroduce.textContent.slice(0, cardIntroduce.textContent.length - 1)
    }
    cardIntroduce.textContent = cardIntroduce.textContent + '...'
  }
}
endPoints()

