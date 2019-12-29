var swiper = new Swiper('#driver_details .swiper_packages .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //   delay: 3000,
    // },
    // speed: 3000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  });