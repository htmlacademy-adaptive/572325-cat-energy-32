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

compareSlider(img1, img2, comparebtn);
