const carousel = document.querySelector(".testimonials-carousel");
const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
const prevButton = carousel.querySelector(".carousel__prev");
const nextButton = carousel.querySelector(".carousel__next");

let currentIndex = 0;
let slidesToShow = 3; 

function setSlidesToShow() {
  if (window.innerWidth < 1170 && window.innerWidth >= 800) {
    slidesToShow = 2; 
  } else if (window.innerWidth < 800) {
    slidesToShow = 1; 
  } else {
    slidesToShow = 3;
  }
  showSlides();
}

function showSlides() {
  slides.forEach((slide, i) => {
    if (i >= currentIndex && i < currentIndex + slidesToShow) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  const maxIndex = slides.length - slidesToShow;
  if (currentIndex < maxIndex) {
    currentIndex += 1;
    showSlides();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    showSlides();
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
window.addEventListener("resize", setSlidesToShow);

setSlidesToShow();
