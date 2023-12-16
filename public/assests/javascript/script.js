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

// footer date
function copyYear() {
  const copyYear = document.querySelector(".date").textContent = new Date().getFullYear();
}
copyYear();

const stickyNavbar = function () {
  const clientY = scrollY;

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
  imageSlider.src = `public/assests/graphics/hero-images/slide${sliderImageNumber++}.png`;

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


// form working

const fullName = document.getElementById("full-name");
const phoneNumber = document.getElementById("phone");
const customerEmail = document.getElementById("email");
const services = document.getElementById("services-requested");

const sendMail = document.querySelector(".submit");


sendMail.addEventListener("click", (e) => {
  e.preventDefault();
  const mailBody = `This mail is from ${fullName.value}.<br><br>
  Name : ${fullName.value}<br>
  Phone number : ${phoneNumber.value}<br>
  Customer mail : ${customerEmail.value}<br>
  Service requested : ${services.value}`;

  console.log(mailBody);

  const sendingMail = () => {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "techmastersstudio@gmail.com",
      Password: "B2B98B87D26AC9E30BA307C17F8751647D17",
      To: 'techmastersstudio@gmail.com',
      From: "techmastersstudio@gmail.com",
      Subject: `${fullName.value} requesting for ${services.value}`,
      Body: mailBody
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: `Request for ${services.value} received`,
            html: 'Our team will be in touch with you within 24 hours or <a href="tel:415-201-6370">Call now</a>',
            icon: "success"
          });
        }
        else {
          Swal.fire({
            title: `${services.value} request not received`,
            html: 'We apologize, but there was an issue receiving your request. Please try again later or <a href="tel:415-201-6370">Call now</a>',
            icon: 'error',
            confirmButtonText: 'Cool',
          });

        }
      }
    );
  }

  sendingMail();
});