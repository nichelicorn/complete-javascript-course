'use strict';

// 🔎 Query selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// select three modal buttons
const btnsShowModal = document.querySelectorAll(".show-modal");

// 🎧 Event listeners
// loop through show modal buttons to add event listener
// for (let i = 0; i < btnsShowModal.length; i++) btnsShowModal[i].addEventListener("click", showModal);
btnsShowModal.forEach(btn => btn.addEventListener("click", showModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// ⚙️ Functions
function showModal() {
//  console.log("show modal on click!");
 // remove hidden class from the modal div and overlay
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};