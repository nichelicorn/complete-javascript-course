'use strict';

// 🔎 Query selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

// 🎧 Event listeners
btnsShowModal.forEach(btn => btn.addEventListener("click", showModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", keyCloseModal);

// ⚙️ Functions
function showModal() {
 modal.classList.remove("hidden");
 overlay.classList.remove("hidden");
};

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

function keyCloseModal(event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
};