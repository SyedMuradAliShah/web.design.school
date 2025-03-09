if (document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    // autoplay: true,
    loop: true,
  });
}

// testmonails
if (document.querySelector(".myTeachers")) {
  var swiper = new Swiper(".myTeachers", {
    spaceBetween: 20,
    // autoplay: true,
    loop: true,
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
}

// testmonails


