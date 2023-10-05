const slides = [
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/dora metal pet brush.png" alt="Dora Metal Pet Brush">' +
    '<a href="#" class="carousel-card__title">DORA Metal Pet Brush</a>' +
    '<p class="carousel-card__price">$15.00</p>' +
    '<button class="recommend-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/kittens heaven set.png" alt="Kittens Heaven Set">' +
    '<a href="#" class="carousel-card__title">Kittens Heaven Set</a>' +
    '<p class="carousel-card__price">$12.00</p>' +
    '<button class="recommend-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/portable cage.png" alt="OPTY Pet Carrier">' +
    '<a href="#" class="carousel-card__title">OPTY Pet Carrier</a>' +
    '<p class="carousel-card__price">$8.00</p>' +
    '<button class="recommend-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/aga rope toy.png" alt="AGA Rope Toy">' +
    '<a href="#" class="carousel-card__title">AGA Rope Toy</a>' +
    '<p class="carousel-card__price">$5.00</p>' +
    '<button class="recommend-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/dora pet carrier.png" alt="DORA Pet Carrier">' +
    '<a href="#" class="carousel-card__title">DORA Pet Carrier</a>' +
    '<p class="carousel-card__price">$23.00</p>' +
    '<button class="recommend-card__button">Add to Cart</button>' +
    "</div>",
];

let currentSlide = 0;

const slideContainer = document.querySelector(".carousel__card-block");

function renderSlide() {
  slideContainer.innerHTML = "";

  slideContainer.innerHTML = slides[currentSlide];

  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlide =
      currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    slideContainer.innerHTML += slides[secondSlide];

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
      slideContainer.innerHTML += slides[thirdSlide];

      // Додати четвертий слайд
      const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
      slideContainer.innerHTML += slides[fourthSlide];
    }
  }

  const carouselCards = document.querySelectorAll(".carousel-card");
  carouselCards.forEach((card) => {
    card.style.userSelect = "none";
    card.style.webkitUserSelect = "none";
    card.style.mozUserSelect = "none";
    card.style.msUserSelect = "none";
  });
}

function nextSlide() {
  currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
  renderSlide();
}

// setInterval(nextSlide, 3000);

renderSlide();

const nextButton = document.querySelector(".button__direction-next");
nextButton.addEventListener("click", nextSlide);

function prevSlide() {
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  renderSlide();
}

const prevButton = document.querySelector(".button__direction-prev");
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
