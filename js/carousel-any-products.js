const carousel = document.querySelector(".carousel-container-product-card");
const caroselContainers = document.querySelectorAll(".carosel-conteiner-product");
const totalContainers = caroselContainers.length;
const visibleContainers = 3;
let currentPosition = 0;
const prevButton = document.querySelector(".carousel__button-prev-product");
const nextButton = document.querySelector(".carousel__button-next-product");

prevButton.addEventListener("click", () => {
  currentPosition = (currentPosition - 1 + totalContainers) % totalContainers;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentPosition = (currentPosition + 1) % totalContainers;
  updateCarousel();
});

function updateCarousel() {
  for (let i = 0; i < totalContainers; i++) {
    const index = (currentPosition + i) % totalContainers;
    const container = caroselContainers[i];
    container.style.display = i >= currentPosition && i < currentPosition + visibleContainers ? "block" : "none";
  }

  carousel.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
  carousel.style.opacity = 0;
  carousel.style.transform = "translateY(100%)"; 
  setTimeout(() => {
    carousel.style.opacity = 1;
    carousel.style.transform = "translateY(0)";
  }, 0); 
}

updateCarousel();




















