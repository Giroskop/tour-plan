document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.modal__overlay')
  const dialog = document.querySelector('.modal__dialog')
  let btn = []
  btn = btn.concat(
    document.querySelector('.booking__button'),
    Array.from(document.querySelectorAll('.hotel-card__button')), 
    Array.from(document.querySelectorAll('.card__button'))
  )
  const btnClose = document.querySelector('.modal__close')

  function modalCLose() { 
    overlay.classList.remove('modal-visible')
    dialog.classList.remove('modal-visible')
  }
  function modalOpen() {
    overlay.classList.add('modal-visible')
    dialog.classList.add('modal-visible')
  }

  btn.forEach( function(item) {
    item.addEventListener('click', modalOpen)
  })
  btnClose.addEventListener('click', modalCLose)

  document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
      modalCLose()
    }
  })
  document.addEventListener('click', function (event) {
    if (event.target == overlay) {
      modalCLose();
    }
  })
})

