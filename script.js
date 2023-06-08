"use strict";

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#second-password");
const email = document.querySelector("#email");
const send = document.querySelector(".send");
const clear = document.querySelector(".clear");
const close = document.querySelector(".close");
const popup = document.querySelector(".popup");
const formBoxes = document.querySelectorAll("input");

clear.addEventListener("click", clearForm);
close.addEventListener("click", clearForm);
send.addEventListener("click", checkForm);
username.onkeyup = () => {
  hideError(checkLength, username);

  if (event.keyCode === 13) {
    password.focus();
  }
};
password.onkeyup = () => hideError(checkLength, password);
password2.onkeyup = () => hideError(checkLength, password2);
email.onkeyup = () => hideError(checkEmail, email);

function checkForm(e) {
  e.preventDefault();
  formBoxes.forEach((formBox) => {
    switch (formBox.className) {
      case "username":
        checkLength(formBox);
        break;
      case "password":
        checkLength(formBox);
        checkPassword(formBox, document.querySelector("#password"));
        break;
      case "email":
        checkLength(formBox);
        checkEmail(formBox);
        break;
      default:
        console.error("input checking error");
        break;
    }
  });
  if (!document.querySelectorAll(".error")[0]) {
    popup.classList.add("show-popup");
  }
}

function clearForm(e) {
  e.preventDefault();
  popup.classList.remove("show-popup");
  formBoxes.forEach((formBox) => {
    formBox.value = "";
    formBox.parentElement.classList.remove("error");
  });
}

function showError(input, message) {
  const formBox = input.parentElement;
  formBox.querySelector(".error-text").textContent = message;
  formBox.classList.add("error");
}

function hideError(checkingFunction, formBox) {
  if (formBox.parentElement.classList.contains("error")) {
    checkingFunction(formBox);
  }
}

function checkLength(input) {
  if (input.value === "") {
    showError(input, input.placeholder);
  } else if (input.value.length < 5) {
    showError(input, `Too short ${input.className}`);
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
