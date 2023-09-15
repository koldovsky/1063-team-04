// document.addEventListener("DOMContentLoaded", function () {
//   function scrollToSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
//   }

//   const scrollToTopBtn = document.getElementById("scroll-btn");

//   function updateScrollButtonVisibility() {
//     if (window.innerWidth <= 768) {
//       scrollToTopBtn.style.display = "none";
//       return;
//     }

//     if (window.scrollY > 700) {
//       scrollToTopBtn.style.display = "block";
//     } else {
//       scrollToTopBtn.style.display = "none";
//     }
//   }

//   window.addEventListener("scroll", () => {
//     updateScrollButtonVisibility();
//   });

//   window.addEventListener("resize", () => {
//     updateScrollButtonVisibility();
//   });

//   scrollToTopBtn.addEventListener("click", () => {
//     scrollToTop();
//   });

//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }

//   updateScrollButtonVisibility();

//   const buttons = document.querySelectorAll(".recommend__cards-tab-btn");
//   const lists = document.querySelectorAll(".recommend__list");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const id = button.getAttribute("onclick").match(/'([^']+)'/)[1];

//       lists.forEach((list) => {
//         list.style.display = "none";
//       });

//       document.getElementById(id).style.display = "flex";

//       buttons.forEach((btn) => {
//         btn.classList.remove("active");
//       });

//       button.classList.add("active");
//     });
//   });

//   document.getElementById("dogs").style.display = "flex";
//   document
//     .querySelector(".recommend__cards-tab-btn[data-id='dogs']")
//     .classList.add("active");

//   var button_tab = document.getElementById("button-tab");
//   var cards_tab_btn = button_tab.getElementsByClassName(
//     "recommend__cards-tab-btn"
//   );

//   for (var i = 0; i < cards_tab_btn.length; i++) {
//     cards_tab_btn[i].addEventListener("click", function () {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// });
