$(function () {
  const artiseSlider = new Swiper('.artise-slider', {
    autoplay: {
      delay: 1000,
    },
    loop: true,

    navigation: {
      nextEl: '.btn-after-white',
      prevEl: '.btn-before-white',
    },
  });
});
