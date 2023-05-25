"use strict";
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const send = document.querySelector(".send");
const clear = document.querySelector(".clear");
const popup = document.querySelector(".popup");

clear.addEventListener("click", (e) => {
  e.preventDefault();
  username.value = "";
  password.value = "";
  password2.value = "";
  email.value = "";
  //   console.log(username.value);
});
