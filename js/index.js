"use strict";

// слайдер
let indicators = document.querySelectorAll(".indicator");

function showSlides(number, bodyColor, blurColor) {
  let slides = document.querySelectorAll(".slider-element");
  let body = document.querySelector("body");
  let containerSlider = document.querySelector(".container-slider");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicators[i].classList.remove("indicator-active");
  }

  containerSlider.dataset.blurColor = blurColor;
  body.style.backgroundColor = "var(--" + bodyColor + ")";
  slides[number - 1].style.display = "block";
  indicators[number - 1].classList.add("indicator-active");
}

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function() {
    showSlides(i + 1, indicators[i].dataset.bodyColor, indicators[i].dataset.blurColor);
  });
}

// модальное окно

let modalButton = document.querySelector(".address-button");
let modal = document.querySelector(".container-modal");
let modalClose = document.querySelector(".icon-close");

if (modalButton) {
  modalButton.addEventListener("click", function(e) {
    modal.style.display = "block";
  });
}

if (modalClose) {
  modalClose.addEventListener("click", function(e) {
    modal.style.display = "none";
  });
}
