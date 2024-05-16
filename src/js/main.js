import "./_components.js";

const burgerBtn = document.querySelector(".header-mob__burger");
const menu = document.querySelector(".menu");
const menuBody = menu.querySelector(".menu__body");
burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
menu.addEventListener("click", (e) => {
  burgerBtn.classList.remove("active");
  menu.classList.remove("active");
});
menuBody.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
