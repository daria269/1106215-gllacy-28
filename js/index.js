"use strict";

// слайдер
let indicators = document.querySelectorAll(".indicator");

function showSlides(number, bodyColor, blurColor, sliderImage) {
  let slides = document.querySelectorAll(".slider-element");
  let body = document.querySelector("body");
  let containerSlider = document.querySelector(".container-slider");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    indicators[i].classList.remove("indicator-current");
  }
  slides[number - 1].dataset.sliderImage = sliderImage;
  containerSlider.dataset.blurColor = blurColor;
  body.style.backgroundColor = "var(--" + bodyColor + ")";
  slides[number - 1].style.display = "flex";
  indicators[number - 1].classList.add("indicator-current");
}

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    showSlides(i + 1, indicators[i].dataset.bodyColor, indicators[i].dataset.blurColor, indicators[i].dataset.sliderImage);
  });
}

// модальное окно

let modalButton = document.querySelector(".address-button");
let modal = document.querySelector(".container-modal");
let modalClose = document.querySelector(".icon-close");

if (modalButton) {
  modalButton.addEventListener("click", function (e) {
    e.preventDefault()
    modal.style.display = "block";
  });
}

if (modalClose) {
  modalClose.addEventListener("click", function (e) {
    modal.style.display = "none";
  });
}

///
let inputField = document.querySelector('.input-field');
let modalBlock = document.querySelector('.modal');
let form = document.querySelector('.form-feedback');
let nameForm = form.querySelector('[name="name"]');
let emailForm = form.querySelector('[name="email"]');

form.addEventListener('submit', function (e) {
  if (!nameForm.value || !emailForm.value) {
    e.preventDefault();
    modalBlock.classList.remove('modal-error');

    modalBlock.classList.add('modal-error');
  }
});
