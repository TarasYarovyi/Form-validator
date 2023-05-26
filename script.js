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
      formBox.parentElement.classList.add("error");
    } else {
      formBox.parentElement.classList.remove("error");
    }
  });
}

function showError(formBox, message) {}
