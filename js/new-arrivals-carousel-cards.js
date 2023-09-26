const cards = [
  {
    id: 1,
    title: "VITALIFE Cruch Sticks Treat",
    price: "$5.00",
    imageUrl: "img/new-arrivals/vitalife-crunch-sticks-treat.png",
  },
  {
    id: 2,
    title: "DUNA Woven Toy",
    price: "$1.50",
    imageUrl: "img/new-arrivals/duna-woven-toy.png",
  },
  {
    id: 3,
    title: "SERA Woven Leash",
    price: "$2.00",
    imageUrl: "img/new-arrivals/sera-woven.png",
  },
  {
    id: 4,
    title: "OPTY Plastic Bowl",
    price: "$3.00",
    imageUrl: "img/new-arrivals/opty-plastic-bowl.png",
  },
  {
    id: 5,
    title: "EGO Butterfly Toy",
    price: "$8.00",
    imageUrl: "img/new-arrivals/ego-butterfly-toy.png",
  },
];

function renderCards(cards) {
  let cardsHtml = "";
  for (const card of cards) {
    cardsHtml += `<div class="carousel__card">
					<img src="${card.imageUrl}" alt="${card.title}" class="carousel__card-img" draggable="false">
					<div class="carousel__card-info">
						<div class="card__info-text">
							<h3 class="carousel__card-title">${card.title}</h3>
							<p class="carousel__card-price">${card.price}</p>
						</div>
						<button class="recommend-card__button" type = "button">Add to Cart</button>
					</div>
				</div>`;
  }
  document.querySelector(".carousel__cards").innerHTML = cardsHtml;
}

renderCards(cards);
