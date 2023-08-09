let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__toggle');
// let changeLang = document.querySelector('.intro__change-languages');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
  }
});


var showModalButton = document.getElementById('showModalButton');
var modal = document.getElementById('modal');
var close = document.getElementsByClassName('close')[0];

showModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

