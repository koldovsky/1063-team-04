const slides = [
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/dora metal pet brush.png" alt="Dora Metal Pet Brush">' +
    '<a href="#" class="carousel-card__title">DORA Metal Pet Brush</a>' +
    '<p class="carousel-card__price">$15.00</p>' +
    '<button class="carousel-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/kittens heaven set.png" alt="Kittens Heaven Set">' +
    '<a href="#" class="carousel-card__title">Kittens Heaven Set</a>' +
    '<p class="carousel-card__price">$12.00</p>' +
    '<button class="carousel-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/portable cage.png" alt="OPTY Pet Carrier">' +
    '<a href="#" class="carousel-card__title">OPTY Pet Carrier</a>' +
    '<p class="carousel-card__price">$8.00</p>' +
    '<button class="carousel-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/aga rope toy.png" alt="AGA Rope Toy">' +
    '<a href="#" class="carousel-card__title">AGA Rope Toy</a>' +
    '<p class="carousel-card__price">$5.00</p>' +
    '<button class="carousel-card__button">Add to Cart</button>' +
    "</div>",
  '<div class="carousel-card">' +
    '<img class="carousel-card__image" src="img/trending-products/dora pet carrier.png" alt="DORA Pet Carrier">' +
    '<a href="#" class="carousel-card__title">DORA Pet Carrier</a>' +
    '<p class="carousel-card__price">$23.00</p>' +
    '<button class="carousel-card__button">Add to Cart</button>' +
    "</div>",
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".carousel-card-container");
  slideContainer.innerHTML = "";

  slideContainer.insertAdjacentHTML("beforeend", slides[currentSlideIdx]);

  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;

    slideContainer.insertAdjacentHTML("beforeend", slides[secondSlideIdx]);

    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;

      slideContainer.insertAdjacentHTML("beforeend", slides[thirdSlideIdx]);

      if (window.matchMedia("(min-width: 1024px)").matches) {
        const fourSlideIdx =
          thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
      }
    }
  }

  renderIndicators();
}

window.addEventListener("resize", renderSlide);

function nextSlide() {
  currentSlideIdx =
    currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx =
    currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

//setInterval(nextSlide, 3000);

function renderIndicators() {
  const indicatorsContainer = document.querySelector(
    ".products__carousel-indicators"
  );
  indicatorsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    indicatorsContainer.innerHTML += `<button class="products__carousel-indicator ${
      i === currentSlideIdx ? "products__carousel-indicator--active" : ""
    }"></button>`;
  }
  const indicators = document.querySelectorAll(".products__carousel-indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlideIdx = index;
      renderSlide();
    });
  });
}

renderSlide();

const nextBtn = document.querySelector(".button__direction-next");
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.querySelector(".button__direction-prev");
prevBtn.addEventListener("click", prevSlide);
