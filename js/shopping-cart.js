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

function handleAddToCartClick(event) {
  const target = event.target;
  if (target.classList.contains("recommend-card__button")) {
    addCount();
  }
}

document.addEventListener("click", handleAddToCartClick);

// wiil need remove
const btnsRemoveCart = document.querySelectorAll(".recommend__title");
btnsRemoveCart.forEach((btn) => {
  btn.addEventListener("click", removeCount);
});
//
