var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    speed: 1000,
    breakpoints: {
      // quando a tela tiver um tamanho menor que 1280px
      1280: {
        slidesPerView: 3,
      },

      845: {
        slidesPerView:2,
        slidesPerGroup:2,
      },

      0: {
        slidesPerView:1,
        slidesPerGroup:1,
      },

    },
  });
  
  
  

  /*
  
  
  
  
  
  */
  