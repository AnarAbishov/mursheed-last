var swiper = new Swiper('#driver_details .swiper_driver_details_cars .swiper-container', {
  
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
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });