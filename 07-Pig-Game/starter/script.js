'use strict';

// 💾 Application state
let currentScore = 0;

// 🔎 Selected elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
// const btns = document.querySelectorAll(".btn");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// 🎬 Starting conditions
// set scores to zero and hide dice on page load
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// 🎧 Event listeners
btnRoll.addEventListener("click", rollDice);

// Function to roll the dice
// if number rolled === 1: set player score to zero; switch to next player
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
    currentScore += roll;
    console.log("current score >", currentScore);
  } else {
    // if roll is 1
    console.log("player rolled a 1!");
    //switch to nex player
  }
};