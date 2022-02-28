'use strict';

// 💾 Application state
let currentScore = 0;
let currentPlayer;

// 🔎 Selected elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
// const btns = document.querySelectorAll(".btn");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// 🎬 Starting conditions
// set scores to zero and hide dice on page load
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
  
  // add roll to player score
  
  // check if the number rolled === 1
  console.log("roll >", roll);
  if (roll !== 1) {
    // add roll to current score
    // display in player's current score box
    currentScore += roll;
    // console.log("current score >", currentScore);
    // refactor to display score in the current player's board
    current0El.textContent = currentScore;
  } else {
    console.log("player rolled a 1!");
    console.log("current player >", currentPlayer);
    // if (currentPlayer === "name--0") {
    //   currentPlayer = "name--1";
    // } else {
    //   currentPlayer = "name--0";
    // }
    currentPlayer = (currentPlayer === "name--0") ? "name--1" : "name--0";
    console.log("reset current player?? >", currentPlayer);
    // if number rolled === 1: set player score to zero; switch to next player
  }
};