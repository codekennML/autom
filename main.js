const menu = document.querySelector(".nav__menu");
const toggle_menu = document.querySelector("#nav__toggle");

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("show__menu");
});

// *===== GSAP ANIMATION ===== *//;

// *===== NAVBAR ===== */
gsap.from(".logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 10,
});
gsap.from(".nav__link", {
  opacity: 0,
  duration: 0.75,
  delay: 2.1,
  stagger: 0.2,
});
// *===== MAIN ===== */
gsap.from(".hero__title", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".hero__subtitle", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});

gsap.from(".btn__start__trial", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".btn__request__demo", {
  opacity: 0,
  duration: 1,
  delay: 2.3,
  y: 20,
});

gsap.from(".hero__works", {
  opacity: 0,
  duration: 0.88,
  delay: 2.6,
  y: 10,
});

gsap.from(".hero__works__logo", {
  opacity: 0,
  duration: 1,
  delay: 2.4,
  y: 10,
  stagger: 0.2,
});

gsap.from(".hero__banner__rhs", {
  opacity: 0,
  duration: 1.5,
  delay: 2.8,
  y: 20,
});
