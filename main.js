/* Toggle Button */
const navMenu = document.getElementById("nav-menu");
const navMenu2 = document.getElementById("nav-menu-2");

const navLink = document.querySelectorAll(".nav-link");
const menuIcon = document.getElementById("menu-icon");

// show / hide mobile navbar
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  navMenu2.classList.toggle("top-[0]");
  menuIcon.classList.toggle("ri-close-large-line");
});

// when click mobile navbar list like "review", it close navbar....
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    navMenu2.classList.toggle("top-[0]");
    menuIcon.classList.toggle("ri-close-large-line");
  });
});

//
/* Toggle Button */

/* Carousel Carousel Slider Slideshow  */
/* Carousel Carousel Slider Slideshow  */

/* Effect MouseMove Effect */
/* Effect MouseMove Effect */

/* Tabs */
/* Tabs */

/* Swiper */
/* Swiper */

/* Show Scroll Up */
/* Show Scroll Up */

/* Scroll Sections Active Link */
/* Scroll Sections Active Link */

/* Scroll Reveal Animation */
/* Scroll Reveal Animation */
