'use strict';

// 🔎 Query selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// select three modal buttons
const btnsShowModal = document.querySelectorAll(".show-modal");


for (let i = 0; i < btnsShowModal.length; i++) console.log("btn text", btnsShowModal[i].textContent);