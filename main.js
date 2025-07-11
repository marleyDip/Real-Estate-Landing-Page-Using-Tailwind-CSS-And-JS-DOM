/* Toggle Button - header */

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

/* Toggle Button - header */

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

/* Effect MouseMove Effect - about, company, contact */

const sections = [
  { id: "#about", imageClass: ".background-image-about" },
  { id: "#company", imageClass: ".background-image-company" },
  { id: "#contact", imageClass: ".background-image-contact" },
];

function handleMouseMove(e, image) {
  const x = e.clientX / window.innerHeight;
  const y = e.clientY / window.innerHeight;

  const moveX = (x - 0.5) * 50;
  const moveY = (y - 0.5) * 50;

  image.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

sections.forEach((section) => {
  document.querySelector(section.id).addEventListener("mousemove", (e) => {
    const image = document.querySelector(section.imageClass);

    handleMouseMove(e, image);
  });
});

// about us section
// document.querySelector("#about").addEventListener("mousemove", (e) => {
//   const image = document.querySelector(".background-image-about");

//   handleMouseMove(e, image);
// });

// company section
// document.querySelector("#company").addEventListener("mousemove", (e) => {
//   const image = document.querySelector(".background-image-company");

//   handleMouseMove(e, image);
// });

// contact section
// document.querySelector("#contact").addEventListener("mousemove", (e) => {
//   const image = document.querySelector(".background-image-contact");

//   handleMouseMove(e, image);
// });

/* Effect MouseMove Effect - about, company, contact */

/* Tabs - process */

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".process__tab");
  const tabContent = document.getElementById("tab-content");
  const tabImage = document.getElementById("tab-image");

  const contentData = {
    1: {
      title: "Acquaintance with the customer",
      paragraphs: [
        "This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architecture listens to your needs and confirms that he or she understands them.",

        "The first thing we do is meeting with our clients and talk through their goals on a future projects. During this meeting, feels free to communicates your ideas and asl lots of questions.",
      ],
      image: "assets/images/process/process-1.jpg",
    },

    2: {
      title: "Project Concept Development",
      paragraphs: [
        "In this stage, we develop a project concept base don the client's preferences and ideas. We present the concept in a visual format to ensure that the clients's vision is accurately represented.",

        "This phase involves a lot of back and forth communication, allowing  us to refine the project concept until  it meets the client's expectations.",
      ],
      image: "assets/images/process/process-2.jpg",
    },

    3: {
      title: "Working on Interior And Exterior",
      paragraphs: [
        "once the concept is approved, we start working on the interior designs. We make sure that all design elements are in harmony, creating a cohesive and aesthetically pleasing result.",

        "We present detailed plans and 3D visualization to help the client understand how the final project will look and feel.",
      ],
      image: "assets/images/process/process-3.jpg",
    },

    4: {
      title: "Finishing Touches for  your Future Home",
      paragraphs: [
        "The final stage involves adding the finishing touches to the projects. We ensure that every detail is perfect and meets the client's standard.",

        "This is where we add the final flourishes that turn a house into a home, making sure it is ready for the client to move in.",
      ],
      image: "assets/images/process/process-4.jpg",
    },
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("process__tab-active"));

      tab.classList.add("process__tab-active");

      const tabIndex = tab.getAttribute("data-tab");

      const data = contentData[tabIndex];

      tabContent.innerHTML = `
        <h1 class="text-firstColor">${data.title}</h1>

        <p class="text-grayColor text-justify">${data.paragraphs[0]}</p>

        <p class="text-grayColor text-justify">${data.paragraphs[1]}</p>
    `;
      tabImage.src = data.image;
    });
  });
});

/* Tabs - process */

/* Swiper - review */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 1000,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
});

/* Swiper - review */

/* Show Scroll Up */
/* Show Scroll Up */

/* Scroll Sections Active Link */
/* Scroll Sections Active Link */

/* Scroll Reveal Animation */
/* Scroll Reveal Animation */
