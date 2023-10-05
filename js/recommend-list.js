const arrayAnimalCategory = [
  "dogs",
  "cats",
  "parrots",
  "rabbits",
  "hamsters",
  "fish",
];

let activeButtonIndex = 0;
let activeRecommendButton = document.querySelector(
  ".recommend__cards-tab-btn.active"
);
const recommendList = await (await fetch("api/recommend-list.json")).json();

function renderRecommendProducts() {
  const partialFirst = document.querySelector(".recommend-partial-first");
  const partialSecond = document.querySelector(".recommend-partial-second");

  partialFirst.innerHTML = "";
  partialSecond.innerHTML = "";

  const activeCategory = arrayAnimalCategory[activeButtonIndex];

  let currentCountProduct = 0;

  for (const product of recommendList) {
    if (product.id === activeCategory) {
      const partial = currentCountProduct < 2 ? partialFirst : partialSecond;

      partial.innerHTML += `
        <article class="recommend-card">
          <div class="recommend-card__image">
            <a href="#">
              <img src="${product.image}" alt="${product.title}">
            </a>
          </div>
          <a href="#" class="recommend-card__title">
            ${product.title}
          </a>
          <p class="recommend-card__price">$${product.price.toFixed(2)}</p>
          <button class="recommend-card__button" type="button">Add to Cart</button>
        </article>`;

      currentCountProduct++;
    }
  }
}
renderRecommendProducts();

const recommendTabBtn = document.querySelectorAll(".recommend__cards-tab-btn");

recommendTabBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    recommendTabBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeButtonIndex = index;

    renderRecommendProducts();
  });
});
