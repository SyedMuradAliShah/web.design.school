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
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
}

// testmonails

// lightbox
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".lightbox-trigger");
  const closeBtn = document.querySelector(".close");

  // Open Lightbox
  images.forEach(image => {
      image.addEventListener("click", function () {
          lightbox.style.display = "flex";
          lightboxImg.src = this.src;
      });
  });

  // Close Lightbox on clicking 'X' or outside the image
  closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
      if (e.target !== lightboxImg) {
          lightbox.style.display = "none";
      }
  });
});

// lightbox

