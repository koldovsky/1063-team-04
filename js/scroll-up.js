function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

const scrollToTopBtn = document.getElementById("scroll-btn");

function updateScrollButtonVisibility() {
  if (window.innerWidth <= 768) {
    scrollToTopBtn.style.display = "none";
    return;
  }

  if (window.scrollY > 768) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
  updateScrollButtonVisibility();
});

window.addEventListener("resize", () => {
  updateScrollButtonVisibility();
});

scrollToTopBtn.addEventListener("click", () => {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

updateScrollButtonVisibility();
