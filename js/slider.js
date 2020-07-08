const indicatorsBlock = document.querySelector(".indicators-slider");
const indicators = document.querySelectorAll(".indicator");
const defaultSliderNumber = 1;


function showSlides(number, bodyColor, blurColor) {
  const slides = document.querySelectorAll(".slider-element");
  const body = document.querySelector("body");
  const containerSlider = document.querySelector(".container-slider");

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
  })
}
