const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const scroll = document.querySelector("body");

burger.addEventListener("click", openNav);

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
  scroll.classList.toggle("active");
}
