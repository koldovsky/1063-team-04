const carousel = document.querySelector('.new-arrivals__carousel');
const carouselInner = carousel.querySelector('.carousel__cards');
const prevButton = carousel.querySelector('.carousel__button-prev');
const nextButton = carousel.querySelector('.carousel__button-next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
}
function setupCarousel() {
    slides = slides.filter(slide => !slide.classList.contains('clone'));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

    carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(carouselInner.children);

    updateCarousel();
}
function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add('clone');
    return clone;
}
function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}
// Event listeners
prevButton.addEventListener('click', () => {
    if (--currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        carouselInner.style.transition = 'none';
        updateCarousel();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});
nextButton.addEventListener('click', () => {
    carouselInner.style.transition = '';
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        carouselInner.style.transition = 'none';
        updateCarousel();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                carouselInner.style.transition = '';
            });
        });
    }
    updateCarousel();
});
window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    setupCarousel();
});
