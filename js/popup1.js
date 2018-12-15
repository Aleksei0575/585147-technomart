var byLink = document.querySelector(".catalog-item-list");
var byPopup = document.querySelector(".modal-buy-curt");
var byClose = byPopup.querySelector(".modal-close");

byLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  byPopup.classList.add("modal-show");
});

byClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  byPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (byPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      byPopup.classList.remove("modal-show");
    }
  }
});