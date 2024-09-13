/* document.addEventListener('DOMContentLoaded', () => {
 const btn = document.querySelector('.main-nav__toggle--open');
  btn.classList.remove('main-nav__toggle--open');
  document.documentElement.addEventListener('resize', () => {
    if(this.clientWidth < 768) {
      btn.style.display = 'grid !important';
    } else {
      btn.classList.remove('main-nav__toggle--open');
    }
  });
}); */

const nav = document.querySelector('.main-nav__list');
nav.insertAdjacentHTML('beforeBegin', '<button class="main-nav__toggle" type="button" onclick="this.classList.toggle(\'main-nav__toggle--open\')"><div class="main-nav__toggle-line"></div><span class="visually-hidden">Открыть меню</span></button>');
nav.classList.remove('no-js');

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

// яндекс карта

/* const map = document.querySelector('.main-footer__where > picture');
map.outerHTML = '<iframe src="https://yandex.by/map-widget/v1/?ll=30.330282%2C59.938081&mode=search&oid=24933578998&ol=biz&sctx=ZAAAAAgBEAAaKAoSCQiPNo5Y4FhAEXbCS3Dq205AEhIJbmsLz0uDZUARRUlIpG3gR0AiBgABAgMEBSgKOABA5a4HSAFiSHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTWVkaWFGbG93L1N0b3JpZXNDb250ZW50VHlwZT1uZXdfbWVkaWFfY2xhc3NpZmllcmoCdWGdAc3MTD2gAQCoAQC9AQzVivXCAQXj6bjkBIICDGh0bWwgYWNhZGVteYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCaTE3NDU4NzE1NDYyNCwxOTc2NDMyMTQwNjcsMTE3Nzk2NTk3ODksNzY3NTg0NjQzMDUsMjI4NDkwNDU2MzIyLDE3MjU5MzM0MDMwLDkyMzIyMzg3ODMsNzMyMTg1NzM4LDczMjE4NTczN7ACAQ%3D%3D&sll=30.330282%2C59.938081&source=serp_navig&sspn=0.063340%2C0.016251&text=html%20academy&z=14.64" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>'; */
