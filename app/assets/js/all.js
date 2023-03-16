$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(() => {
  $('.btn-buger').on('click',function(e){
    $('.btn-buger').toggleClass('open');
    $('.menu-mobile').toggleClass('open');
  })
})

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {  //根据屏幕调整参数，类似css媒体查询，可以是分辨率：320，也可以是点密度：@1.00
    360: {  //当屏幕宽度大于等于320
      slidesPerView: 3,
      spaceBetween: 8
    },
    768: {  //当屏幕宽度大于等于768 
      slidesPerView: 10,
      spaceBetween: 16
    },
  }
});

// Swiper
const swiper2 = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});