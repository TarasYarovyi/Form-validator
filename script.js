"use strict";
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const send = document.querySelector(".send");
const clear = document.querySelector(".clear");
const popup = document.querySelector(".popup");
const formBoxes = document.querySelectorAll("input");

clear.addEventListener("click", clearForm);
send.addEventListener("click", checkForm);

function clearForm(e) {
  e.preventDefault();

  formBoxes.forEach((formBox) => {
    formBox.value = "";
    formBox.parentElement.classList.remove("error");
  });
}

function checkForm(e) {
  e.preventDefault();
  formBoxes.forEach((formBox) => {
    switch (formBox.className) {
      case "username":
        checkLength(formBox, 5);
        break;
      case "password":
        checkLength(formBox, 5);
        checkPassword(formBox, document.querySelector("#password"));
        break;
      case "email":
        checkLength(formBox, 5);
        checkEmail(formBox);
        break;
      default:
        console.error("input checking error");
        break;
    }
  });
  if (document.querySelectorAll(".error")[0]) {
    popup.style.display = "none";
  }
}

function showError(input, message) {
  const formBox = input.parentElement;
  formBox.querySelector(".error-text").textContent = message;
  formBox.classList.add("error");
}

function checkLength(input, min) {
  if (input.value === "") {
    showError(input, input.placeholder);
  } else if (input.value.length < min) {
    showError(input, `Too short ${input.id}`);
  } else {
    input.parentElement.classList.remove("error");
  }
}

function checkPassword(currentPassword, firstPassword) {
  if (currentPassword.value !== firstPassword.value) {
    showError(currentPassword, "Passwords must be the same");
  }
}

function checkEmail(email) {
  const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regexp.test(email.value)) {
    showError(email, "Wrong email");
  } else {
    email.parentElement.classList.remove("error");
  }
}
