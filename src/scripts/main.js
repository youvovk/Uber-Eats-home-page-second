'use strict';
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('button-up_js-scroll-top').style.display = 'block';
  } else {
    document.getElementById('button-up_js-scroll-top').style.display = 'none';
  }
};

const topBtn = document.getElementById('button-up_js-scroll-top');
topBtn.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
);
