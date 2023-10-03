const carousel = document.querySelector(".testimonials-carousel");
const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
const prevButton = carousel.querySelector(".carousel__prev");
const nextButton = carousel.querySelector(".carousel__next");

let currentIndex = 0;
const slidesToShow = 3;

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
  currentIndex += slidesToShow;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex + slidesToShow > slides.length) {
    currentIndex = slides.length - slidesToShow;
  }
  showSlides();
}

function prevSlide() {
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = slides.length - slidesToShow;
  }
  showSlides();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlides();
