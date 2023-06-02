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
        break;
      case "email":
        checkLength(formBox, 5);
        break;
      default:
        console.error("input checking error");
        break;
    }
  });
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
