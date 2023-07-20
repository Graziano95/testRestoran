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



const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderNavItems = document.querySelectorAll('.slider-dot');

let currentSlide = 0;

function playSlider() {
  setInterval(function() {
    currentSlide++;
    if(currentSlide >= sliderSlides.length) {
      currentSlide = 0;
    }
    slideTo(currentSlide);
  }, 5000);
}

function slideTo(index) {
  const slideWidth = sliderSlides[0].clientWidth;
  sliderTrack.style.transform = `translateX(-${slideWidth * index}px)`;
  sliderSlides.forEach(function(slide, slideIndex) {
    if(slideIndex === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  currentSlide = index;
  updateNav(currentSlide);
}

function updateNav(index) {
  sliderNavItems.forEach(function(item, itemIndex) {
    if(itemIndex === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

sliderNavItems.forEach(function(item, index) {
  item.addEventListener('click', function() {
    slideTo(index);
  });
});

slideTo(currentSlide);
playSlider();


// // определяем ссылку и высоту окна
// const link = document.querySelector(".animate");
// const windowHeight = window.innerHeight;

// // добавляем обработчик событий, который будет отслеживать прокрутку страницы
// window.addEventListener("scroll", () => {
//   // определяем, насколько далеко от верха страницы находится верхняя граница ссылки
//   const linkPosition = link.getBoundingClientRect().top;
  
//   // если верхняя граница ссылки находится на расстоянии меньше, чем окно браузера
//   // то добавляем к ссылке класс, который запускает анимацию
//   if (linkPosition < windowHeight) {
//     link.classList.add("animate-link");
//   }
// });

// // определяем элемент и высоту окна
// const element = document.querySelector(".animate-me");
// const windowHeight = window.innerHeight;

// // добавляем обработчик событий, который будет отслеживать прокрутку страницы
// window.addEventListener("scroll", () => {
//   // определяем, насколько далеко от верха страницы находится граница элемента
//   const elementPosition = element.getBoundingClientRect().top;
  
//   // если граница элемента находится на расстоянии меньше, чем окно браузера
//   // то добавляем к нему класс, который запускает анимацию
//   if (elementPosition < windowHeight) {
//     element.classList.add("animate");
//   }
// });



const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});




let modal = document.getElementById("myModal");
let modalDiv = document.getElementById("modal-div");
let span = document.getElementsByClassName("close")[0];

function loadDiv() {
  modal.style.display = "block";
}

setTimeout(function() {
  loadDiv();
}, 10000);

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};