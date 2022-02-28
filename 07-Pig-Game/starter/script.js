'use strict';

// 🔎 Selected elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
// const btns = document.querySelectorAll(".btn");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// set scores to zero and hide dice on page load
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", rollDice);

// Function to roll the dice
// check if the number rolled === 1
// if number rolled === 1: set player score to zero; switch to next player
function rollDice() {
  // √ generate a random dice roll
  const roll = Math.trunc(Math.random() * 6) + 1;
 

  console.log("roll >", roll);
}