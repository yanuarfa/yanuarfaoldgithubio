window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const limit = header.offsetTop;

  if (window.pageYOffset > limit) {
    nav.classList.add("nav-blur");
    nav.classList.remove("nav-bg");
  } else {
    nav.classList.remove("nav-blur");
    nav.classList.add("nav-bg");
  }

  console.log(window.pageYOffset > limit);
};

const hamburger = document.querySelector("#hamburgerMenu");
const navMenu = document.querySelector("#nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("show");
  body.classList.toggle("nooverflow");
});
