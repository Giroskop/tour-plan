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

// Mobile menu
let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})

// form validation
$('.form').each( function() {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "minimum 6 characters needed"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      tel: {
        required: "Telephone required",
      },
    }
  })
})

// Masks
$(document).ready(function(){
  $('input[type="tel"]').mask('+0 (000) 000-00-00');
});

// 3points
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

