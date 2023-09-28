const responseRecommendList = await fetch("api/recommend-list.json");
const recommendList = await responseRecommendList.json();

function renderRecommendProducts(recommendList) {
  const partialFirst = document.querySelector(".recommend-partial-first");
  let currentCountProduct = 1;
  const partialSecond = document.querySelector(".recommend-partial-second");
  partialFirst.innerHTML = "";
  partialSecond.innerHTML = "";
  for (const product of recommendList) {
    if (product.id === "dogs") {
      if (currentCountProduct < 3) {
        partialFirst.innerHTML += `
			<article class="recommend-card">
			<div class="recommend-card__image">
			<a href="#">
				<img src="${product.image}" alt="${product.title}">
			</a>
			</div>
			<a href="#" class="recommend-card__title">
			${product.title}
			</a>
			<p class="recommend-card__price">${product.price}</p>
			<button class="recommend-card__button" type="button">Add to Cart</button>
			</article>`;
        currentCountProduct++;
      } else {
        partialSecond.innerHTML += `
				<article class="recommend-card">
				<div class="recommend-card__image">
					<a href="#">
						<img src="${product.image}" alt="${product.title}">
					</a>
				</div>
				<a href="#" class="recommend-card__title">
					${product.title}
				</a>
				<p class="recommend-card__price">${product.price}</p>
				<button class="recommend-card__button" type="button">Add to Cart</button>
			</article>
			`;
      }
    }
  }
}

renderRecommendProducts(recommendList);
