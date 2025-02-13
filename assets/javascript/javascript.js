if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    loop: true,
  });
}

// testmonails
if (document.querySelector(".myGrade")) {
  var swiper = new Swiper(".myGrade", {
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  });
}

// testmonails


