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
    if (formBox.value === "") {
      showError(formBox, formBox.placeholder);
    } else if (formBox.type === "text" && formBox.value.length < 5) {
      showError(formBox, "Too short name");
    } else if (formBox.type === "password" && formBox.value.length < 8) {
      showError(formBox, "Too short password");
    } else if (formBox.type === "email" && formBox.value.length < 5) {
      showError(formBox, "Too short email");
    } else {
      formBox.parentElement.classList.remove("error");
    }
  });
}

function showError(input, message) {
  const formBox = input.parentElement;
  formBox.querySelector(".error-text").textContent = message;
  formBox.classList.add("error");
}
function checkLength(input, min) {
  if (input.checkLength < min) {
    showError(input, "Please complete");
  }
}
