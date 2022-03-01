'use strict';

// 💾 Application state
let currentScore = 0;
let currentPlayer, currentScoreDisplay, currentActive;
const scores = [0, 0]; // jonas' solution; the cumulative score for each player 

// 🔎 Selected elements
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const player0ActiveEl = document.querySelector(".player--0");
const player1ActiveEl = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

// 🎬 Starting conditions
// set scores to zero and hide dice on page load; set current player
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
currentActive = player0ActiveEl;
// currentPlayer = "name--0"; // original solution
currentPlayer = 0; // jonas' solution
currentScoreDisplay = current0El;

// 🎧 Event listeners
btnRoll.addEventListener("click", takeTurn);

// ⚙️ Functions
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

// Function to roll the dice
function takeTurn() {
  // generate a random dice roll
  const roll = rollDice();
  
  // display the dice corresponding to the roll
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${roll}.png`;
  
  // check if the number rolled === 1
  if (roll !== 1) {
    updateCurrentScore(roll);
  } else { 
    switchPlayer();
  };
};

function updateCurrentScore(roll) {
    // update and display current score
    currentScore += roll;
    currentScoreDisplay.textContent = currentScore;
};

function switchPlayer() {
   console.log(`🧟‍♀️...player ${currentPlayer} rolled a 1!`);

   // set current player score to zero and display;
   currentScore = 0;
   currentScoreDisplay.textContent = currentScore;

   // reset current player to the next player
   currentPlayer = (currentPlayer === 0) ? 1 : 0;

   // reset currentScoreDisplay
   currentScoreDisplay = (currentScoreDisplay === current0El) ? current1El : current0El;

   // set active player status on game board
   player0ActiveEl.classList.toggle("player--active");
   player1ActiveEl.classList.toggle("player--active");
};