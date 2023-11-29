"use strict";

const phoneMenu = document.querySelector(".menu-nav");
const navbtnContainer = document.querySelector(".nav-btn-container");
const navBtn = document.querySelector(".nav-btn");

navbtnContainer.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  phoneMenu.classList.toggle("show");
});