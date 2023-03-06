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


// class Slider {
//   constructor(obj) {
//     this.images = document.querySelectorAll(obj.images)
//     this.btNexy = document.querySelector(obj.next)
//     this.btPrev = document.querySelector(obj.prev)
//     this.interval = obj.interval
//     this.i = 0
//     this.btNext.addEventListener("click", this.next.bind(this))
//     this.btPrev.addEventListener("click", this.prev.bind(this))
//     setInterval(this.next.bind(this), this.interval)
//   }

//   prev () {
//     this.images[this.i].className = "";
//     this.i--
//     if(this.i < 0) {
//       this.i = this.images.length - 1 
//     }
//     this.images[this.i].className = "shown";
//   }

//   next () {
//     this.images[this.i].className = "";
//     this.i++
//     if(this.i >= this.images.length) {
//       this.i = 0 
//     }
//     this.images[this.i].className = "shown";
//   }
// }

// new Slider({
//   images: ".gallery . photo img",
//   next: ".gallery .tabs .next",
//   prev: ".gallery .tabs .prev",
//   interval: "2000"
// })