const navBtn = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__list');
navBtn.classList.remove('main-nav__toggle--open');
navList.classList.remove('main-nav__list--nojs');

// compare slider

function compareSlider(i1, i2, btn) {
  const w = i1.offsetWidth;
  let clicked = 0;
  btn.addEventListener('mousedown', slideReady);
  window.addEventListener('mouseup', () => {
    clicked = 0;
  });
  btn.addEventListener('touchstart', slideReady);
  window.addEventListener('touchend', () => {
    clicked = 0;
  });

  function slideReady(e) {
    e.preventDefault();
    clicked = 1;
    window.addEventListener('mousemove', slideMove);
    window.addEventListener('touchmove', slideMove);
  }

  function slideMove(e) {
    if (clicked === 0) {
      return false;
    }
    let pos = 0;
    e = (e.changedTouches) ? e.changedTouches[0] : e;
    const a = i1.getBoundingClientRect();
    pos = e.pageX - a.left;
    if (pos < 0) {
      pos = 0;
    }
    if (pos > w) {
      pos = w;
    }
    i1.style.clipPath = `polygon(0 0, ${ pos }px 0, ${ pos }px 100%, 0 100%)`;
    i2.style.clipPath = `polygon(${ pos }px 0, 100% 0, 100% 100%, ${ pos }px 100%)`;
    btn.style.left = `${pos - 2}px`;
  }
}

const img1 = document.querySelector('.results-slider__img-before');
const img2 = document.querySelector('.results-slider__img-after');
const comparebtn = document.querySelector('.results-slider__btn');

if (document.querySelector('.results-slider')) {
  compareSlider(img1, img2, comparebtn);
}

// google карта

const map = document.querySelector('.main-footer__where > picture');
map.outerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8224469756535!2d30.314833975887662!3d59.96826865971507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5afc31%3A0x5f2ac55f567b2400!2sHTML%20Academy!5e0!3m2!1sru!2sby!4v1726530691374!5m2!1sru!2sby" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
