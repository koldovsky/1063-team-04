// let currentCountProducts = localStorage.getItem("countProducts");

// if (currentCountProducts === null) {
//   currentCountProducts = 0;
// } else {
//   currentCountProducts = parseInt(currentCountProducts);
// }

// function addCount() {
//   currentCountProducts++;
//   localStorage.setItem("countProducts", currentCountProducts.toString());
//   renderCart();
// }

// function removeCount() {
//   currentCountProducts--;
//   localStorage.setItem("countProducts", currentCountProducts.toString());
//   renderCart();
// }

// function renderCart() {
//   const cart = document.querySelector(".shopping__cart-svg-wrap");
//   const countProductsCart = document.querySelector(".shopping__cart-count");

//   if (currentCountProducts === 0) {
//     cart.style.display = "none";
//   } else {
//     cart.style.display = "block";
//   }

//   if (currentCountProducts < 10)
//     countProductsCart.innerText = currentCountProducts;
//   else countProductsCart.innerText = "9+";
// }

// renderCart();

// const btnsAddCart = document.querySelectorAll(".recommend-card__button");
// btnsAddCart.forEach((btn) => {
//   btn.addEventListener("click", addCount);
// });

// const btnsRemoveCart = document.querySelectorAll(".recommend__cards-tab-btn");
// btnsRemoveCart.forEach((btn) => {
//   btn.addEventListener("click", removeCount);
// });

function getCurrentCountFromStorage() {
  const storedCount = localStorage.getItem("countProducts");
  return storedCount === null ? 0 : parseInt(storedCount);
}

function updateCountInStorage(count) {
  localStorage.setItem("countProducts", count.toString());
}

function updateCartDisplay(count) {
  const cart = document.querySelector(".shopping__cart-svg-wrap");
  const countProductsCart = document.querySelector(".shopping__cart-count");

  if (count === 0) cart.style.display = "none";
  else cart.style.display = "block";

  countProductsCart.innerText = count < 10 ? count : "9+";
}

function addCount() {
  const currentCountProducts = getCurrentCountFromStorage();
  const newCount = currentCountProducts + 1;
  updateCountInStorage(newCount);
  updateCartDisplay(newCount);

  const cartSvg = document.querySelector(".shopping__cart-svg");
  cartSvg.classList.add("shopping__cart-increase");

  setTimeout(() => {
    cartSvg.classList.remove("shopping__cart-increase");
  }, 500);
}

// wiil need remove
function removeCount() {
  const currentCountProducts = getCurrentCountFromStorage();
  if (currentCountProducts > 0) {
    const newCount = currentCountProducts - 1;
    updateCountInStorage(newCount);
    updateCartDisplay(newCount);
  }
}
//

const initialCount = getCurrentCountFromStorage();
updateCartDisplay(initialCount);

const btnsAddCart = document.querySelectorAll(".recommend-card__button");
btnsAddCart.forEach((btn) => {
  btn.addEventListener("click", addCount);
});

// wiil need remove
const btnsRemoveCart = document.querySelectorAll(".recommend__title");
btnsRemoveCart.forEach((btn) => {
  btn.addEventListener("click", removeCount);
});
//
