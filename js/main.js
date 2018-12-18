var link = document.querySelector(".modal-btn");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector(".user-name");
var email = popup.querySelector(".user-email");
var message = popup.querySelector("[name=letter]");

var isStorageSupport = true;
var storage = "";
var storageEmail = "";


try {
    var storage = localStorage.getItem("login");
    var storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage || storageEmail) {
        login.value = storage;
        email.value = storageEmail;
        message.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    console.log("Click");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {  //А здесь mapPopup
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// var byLink = document.querySelector(".catalog-item-list");
// var byPopup = document.querySelector(".modal-buy-curt");
// var byClose = byPopup.querySelector(".modal-close");

// byLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   byPopup.classList.add("modal-show");
// });

// byClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   byPopup.classList.remove("modal-show");
// });

// window.addEventListener("keydown", function(evt) { 
//   if (evt.keyCode === 27) {
//     if (byPopup.classList.contains("modal-show")) { Это правили не уберешь т.к.
//       evt.preventDefault();                          здесь идет ссылка на byPopup
//       byPopup.classList.remove("modal-show");
//     }
//   }
// });

