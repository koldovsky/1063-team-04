const slides = [
    '<div class="carousel_card">' +
    '<img class="img__card" src="img/banners.and.carousel/applaws.png" alt="Applaws">' +
    '</div>',
    '<div class="carousel_card">' +
    '<img class="img__card" src="img/banners.and.carousel/dokas.png" alt="Dokas">' +
    '</div>',
    '<div class="carousel_card">' +
    '<img class="img__card" src="img/banners.and.carousel/felix.png" alt="Felix">' +
    '</div>',
    '<div class="carousel_card">' +
    '<img class="img__card" src="img/banners.and.carousel/gourmet.png" alt="Gourmet">' +
    '</div>',
    '<div class="carousel_card">' +
    ' <img class="img__card" src="img/banners.and.carousel/purizon.png" alt="Purizon">' +
    '</div>',
    '<div class="carousel_card">' +
    '<img class="img__card" src="img/banners.and.carousel/rocco.png" alt="Rocco">' +
    '</div>',
    '<div class="carousel_card">' +
    ' <img class="img__card" src="img/banners.and.carousel/tigerino.png" alt="Tigerino">' +
    '</div>',
];

let currentSlide = 0;
const slideContainer = document.querySelector('.products__carousel-slide');

function renderSlide() {
    slideContainer.innerHTML = '';
    const screenWidth = window.innerWidth;

    let slidesToShow = 1;

    if (screenWidth >= 479) {
        slidesToShow = 2;
    }

    if (screenWidth >= 768) {
        slidesToShow = 3;
    }

    if (screenWidth >= 1024) {
        slidesToShow = 6;
    }

    for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
        const index = i >= slides.length ? i - slides.length : i;
        slideContainer.innerHTML += slides[index];
    }

    const carouselCards = document.querySelectorAll('.carousel_card');
    carouselCards.forEach(card => {
        card.style.userSelect = 'none';
        card.style.webkitUserSelect = 'none';
        card.style.mozUserSelect = 'none';
        card.style.msUserSelect = 'none';
    });
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

renderSlide();

const nextButton = document.querySelector('.carousel__button-next');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.querySelector('.carousel__button-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);