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

let onSlide = false;

window.addEventListener("load", () => {
  autoSlide();

  const buttonPrev = document.querySelector(".carousel__button__prev");

  const buttonNext = document.querySelector(".carousel__button__next");

  buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));

  buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
});

// function autoSlide
function autoSlide() {
  setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 5000);
}
// function autoSlide

// function slide
function slide(toIndex) {
  if (onSlide) return;

  onSlide = true;

  const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));
  const itemActive = document.querySelector(".carousel__item__active");

  const itemActiveIndex = itemsArray.indexOf(itemActive);
  let newItemActive = null;

  if (toIndex > itemActiveIndex) {
    if (toIndex >= itemsArray.length) {
      toIndex = 0;
    }

    newItemActive = itemsArray[toIndex];

    newItemActive.classList.add("carousel__item__pos__next");
    setTimeout(() => {
      newItemActive.classList.add("carousel__item__next");
      itemActive.classList.add("carousel__item__next");
    }, 20);
  } else {
    if (toIndex < 0) {
      toIndex = itemsArray.length - 1;
    }

    newItemActive = itemsArray[toIndex];

    newItemActive.classList.add("carousel__item__pos__prev");
    setTimeout(() => {
      newItemActive.classList.add("carousel__item__prev");
      itemActive.classList.add("carousel__item__prev");
    }, 20);
  }

  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "carousel__item";
      newItemActive.className = "carousel__item carousel__item__active";
      onSlide = false;
    },
    {
      once: true,
    }
  );
}
// function slide

// function getItemActiveIndex
function getItemActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));

  const itemActive = document.querySelector(".carousel__item__active");

  //if (!itemActive) return -1;

  const itemActiveIndex = itemsArray.indexOf(itemActive);
  return itemActiveIndex;
}
// function getItemActiveIndex

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
