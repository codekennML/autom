const menu = document.querySelector(".nav__menu");
const toggle_menu = document.querySelector("#nav__toggle");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("show__menu");
});
