let modalButton = document.querySelector(".address-button");
let modal = document.querySelector(".container-modal");
let modalClose = document.querySelector(".modal-close");

modalButton.addEventListener("click", function(e) {
  modal.style.display = "block";
})

modalClose.addEventListener("click", function(e) {
  modal.style.display = "none";
})
