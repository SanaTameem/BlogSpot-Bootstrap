function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      if (!navbar.classList.contains("bg-dark")) {
        navbar.classList.add("bg-dark");
      }
      navbar.classList.add("navbar-sticky");
    } else {
      if (!navbar.classList.contains("toggled")) {
        navbar.classList.remove("bg-dark");
      }
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

const hamburger = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("toggled");
});
