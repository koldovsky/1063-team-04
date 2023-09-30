const carouselContainer = document.querySelector(".carousel-container-product-card");
const carouselItems = document.querySelectorAll(".carosel-conteiner-product");
const prevButton = document.getElementById("carouselPrevButton");
const nextButton = document.getElementById("carouselNextButton");

const visibleSlides = Math.min(3, window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1);

let currentIndex = 0;

function moveCarousel(direction) {
    if (direction === "next") {
        currentIndex += visibleSlides;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; 
        }
    } else if (direction === "prev") {
        currentIndex -= visibleSlides;
        if (currentIndex < 0) {
            currentIndex = Math.floor(carouselItems.length / visibleSlides) * visibleSlides; 
        }
    }

    carouselContainer.style.transform = `translateX(-${currentIndex * 100 / carouselItems.length}%)`;
}

prevButton.addEventListener("click", () => {
    moveCarousel("prev");
});

nextButton.addEventListener("click", () => {
    moveCarousel("next");
});








