      var link = document.querySelector(".modal-btn");
      var popup = document.querySelector(".modal-login");
      var close = document.querySelector(".modal-close");
      
      var form = popup.querySelector("form");
      var login = popup.querySelector(".user-name");
      var email = popup.querySelector(".user-email");
      var message = popup.querySelector("[name=letter]");
      // var storage = localStorage.getItem("login");
      // var storageEmail = localStorage.getItem("email");
      var isStorageSupport = true;
      var storage = "";
      var storageEmail = "";

      
      try {
        var storage = localStorage.getItem("login");
        var storageEmail = localStorage.getItem("email");
      } catch (err) {
        isStorageSupport = false;
      }

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

      form.addEventListener("submit", function(evt) {
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

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
      });