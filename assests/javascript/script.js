"use strict";

// navigation
const phoneMenu = document.querySelector(".menu-nav");
const navbtnContainer = document.querySelector(".nav-btn-container");
const navBtn = document.querySelector(".nav-btn");

// hero section
const imageSlider = document.querySelector(".slider-image");
let sliderImageNumber = 1;

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
