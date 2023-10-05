const text = document.querySelector(".contact__subscription-link-text");
const arrow = document.querySelector(".contact__subscription-link-arrow");

arrow.addEventListener("mouseenter", () => {
  arrow.style.textDecoration = "underline var(--color-arrow)";
  text.style.textDecoration = "underline var(--color-footer-hor-line)";
});

arrow.addEventListener("mouseleave", () => {
  arrow.style.textDecoration = "none";
  text.style.textDecoration = "none";
});

text.addEventListener("mouseenter", () => {
  arrow.style.textDecoration = "underline var(--color-footer-hor-line)";
  text.style.textDecoration = "underline var(--color-footer-hor)";
});

text.addEventListener("mouseleave", () => {
  arrow.style.textDecoration = "none";
  text.style.textDecoration = "none";
});