import Swiper from "../../node_modules/swiper/swiper-bundle";

var swiper = new Swiper(".topTeachers", {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const backToTopButton = document.querySelector("#backtotop");
const homeContainer = document.querySelector("#home-container");

backToTopButton.style.display = "none";

homeContainer.addEventListener("scroll", () => {
  if (homeContainer.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  homeContainer.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
