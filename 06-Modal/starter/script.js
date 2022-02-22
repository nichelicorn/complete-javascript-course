'use strict';

// 🔎 Query selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// select three modal buttons
const btnsShowModal = document.querySelectorAll(".show-modal");

// 🎧 Event listeners
// loop through show modal buttons to add event listener
for (let i = 0; i < btnsShowModal.length; i++) btnsShowModal[i].addEventListener("click", showModal);

function showModal() {
//  console.log("show modal on click!");
 // remove hidden class from the modal div
 modal.classList.remove("hidden");
};