let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__toggle');
let changeLang = document.querySelector('.intro__change-languages');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  } else {
    navMain.classList.add('main-header__nav--closed');
    navMain.classList.remove('main-header__nav--opened');
  }
});

navToggle.addEventListener('click', function () {
    if (changeLang.classList.contains('noJS')) {
        changeLang.classList.remove('noJS');
        changeLang.classList.add('YesJS');
    } else {
        changeLang.classList.add('noJS');
        changeLang.classList.remove('YesJS');
    }
});


const images = document.querySelectorAll(".gallery .photo img");
const photo = document.querySelector(".photo");
let count = 0;
let width;

function init() {
  width = document.querySelector('.gallery').offsetWidth;
  photo.style.width = width * images.length + 'px';
  images.forEach(item => {
      item.style.width = width + 'px';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
  count++;
  if (count >= images.length) {
      count = 0;
  }
  rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
      count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  photo.style.transform = 'translate(-' + count * width + 'px)';

}