const shoppingCart = document.querySelector(".shopping__cart");
const modalOrder = document.querySelector(".popup-wrap");
const btnCloseModal = document.querySelector(".popup__header-svg");

shoppingCart.addEventListener("click", function () {
  modalOrder.style.display = "block";
});

btnCloseModal.addEventListener("click", function () {
  modalOrder.style.display = "none";
});

const modalEmpty = document.querySelector(".popup__empty");
const currentCount = localStorage.getItem("countProducts");
