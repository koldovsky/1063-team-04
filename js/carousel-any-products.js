const carouselContainer = document.querySelector(".carousel-container-product-card");
const carouselItems = document.querySelectorAll(".carosel-conteiner-product");
const prevButton = document.getElementById("carouselPrevButton");
const nextButton = document.getElementById("carouselNextButton");

const slideWidth = carouselItems[0].offsetWidth;

const numSlides = carouselItems.length;

let currentIndex = 0;

function moveCarousel(direction) {
    if (direction === "next") {
        currentIndex++;
        if (currentIndex === numSlides) {
            currentIndex = 0; 
        }
    } else if (direction === "prev") {
        currentIndex--;
        if (currentIndex === -1) {
            currentIndex = numSlides - 1; 
        }
    }

    carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

prevButton.addEventListener("click", () => {
    moveCarousel("prev");
});

nextButton.addEventListener("click", () => {
    moveCarousel("next");
});







