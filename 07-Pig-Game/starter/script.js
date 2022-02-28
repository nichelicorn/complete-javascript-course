'use strict';

// 💾 Application state
let currentScore = 0;
let currentPlayer;

// 🔎 Selected elements
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

// 🎬 Starting conditions
// set scores to zero and hide dice on page load; set current player
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
currentPlayer = "name--0";

// 🎧 Event listeners
btnRoll.addEventListener("click", rollDice);

// Function to roll the dice
function rollDice() {
  // √ generate a random dice roll
  const roll = Math.trunc(Math.random() * 6) + 1;
  
  // √ display the dice corresponding to the roll
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${roll}.png`
  
  // check if the number rolled === 1
  console.log("roll >", roll);
  if (roll !== 1) {
    // update and display current score
    currentScore += roll;
    current0El.textContent = currentScore;
  } else {
    // if number rolled === 1: set player score to zero; switch to next player
    currentScore = 0;
    current0El.textContent = currentScore;
    // console.log("player rolled a 1!");
    // console.log("current player >", currentPlayer);
    currentPlayer = (currentPlayer === "name--0") ? "name--1" : "name--0";
    console.log("reset current player?? >", currentPlayer);
  }

    // add roll to current player score
  
};