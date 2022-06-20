const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const backgroundBlur = document.querySelector(".banner");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    backgroundBlur.classList.toggle("active");
}