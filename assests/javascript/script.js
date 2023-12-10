"use strict";

// navigation
const phoneMenu = document.querySelector(".menu-nav");
const navbtnContainer = document.querySelector(".nav-btn-container");
const navBtn = document.querySelector(".nav-btn");
const headerSection = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");

// hero section
const imageSlider = document.querySelector(".slider-image");
let sliderImageNumber = 1;

// hire-us section
const formLabels = document.querySelectorAll("label");

// testimonials section
const stars1 = document.querySelectorAll(".rating-1 i");
const stars2 = document.querySelectorAll(".rating-2 i");
const stars3 = document.querySelectorAll(".rating-3 i");

const stickyNavbar = function () {
  const clientY = scrollY;
  console.log("ss");
  if (clientY > 500) {
    headerSection.classList.add("sticky");
    sectionHero.style.paddingTop = `9rem`;
  }
  else {
    headerSection.classList.remove("sticky");
    sectionHero.style.paddingTop = `2rem`;
  }
}

document.addEventListener('scroll', stickyNavbar);





// navigation open and close
navbtnContainer.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  phoneMenu.classList.toggle("show");
});


// hero section image slider
function slideImage() {
  if (sliderImageNumber > 11) {
    sliderImageNumber = 1;
  }
  imageSlider.src = `assests/graphics/hero-images/slide${sliderImageNumber++}.png`;

  setTimeout(() => {
    slideImage();
  }, 2400);
}
slideImage();



// wave animation in form inputs

formLabels.forEach(labelEl => {
  const labeltext = labelEl.textContent.split("");

  labelEl.innerHTML = "";

  labeltext.forEach((letter, i) => {
    const spanEl = document.createElement("span");
    spanEl.innerText = letter;

    if (spanEl.innerText !== " ") {
      spanEl.style.transitionDelay = `${40 * i}ms`;
    }
    labelEl.appendChild(spanEl);
  });

});

// wave animation in testimonials section for stars

const starWaveAnimation = function (stars) {
  stars.forEach((star, i) => {
    star.style.animationDelay = `${150 * i}ms`;
  });
}

starWaveAnimation(stars1);
starWaveAnimation(stars2);
starWaveAnimation(stars3);


