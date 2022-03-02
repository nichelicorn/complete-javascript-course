'use strict';

// 💾 Application state
let currentScore = 0;
let currentPlayer, currentScoreDisplay, currentActive;
const scores = [0, 0];

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

// 🎧 Event listeners
window.addEventListener("load", newGame);
btnHold.addEventListener("click", holdScore);
btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", takeTurn);

// ⚙️ Functions
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
};

function takeTurn() {
  const roll = rollDice();
  
  displayDice(roll);
  
  if (roll !== 1) {
    updateCurrentScore(roll);
  } else { 
    switchPlayer();
  };

  // checkScore();
};

function displayDice(roll) {
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${roll}.png`;
};

function updateCurrentScore(roll) {
    currentScore += roll;
    currentScoreDisplay.textContent = currentScore;
};

function switchPlayer() {
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

function holdScore() {
  if (currentPlayer === 0) {
    scores[0] += currentScore;
    score0El.textContent = scores[0];
  } else {
    scores[1] += currentScore;
    score1El.textContent = scores[1];
  };

  checkScore();
  // switchPlayer();
};

function newGame() {
  // 🎬 Starting conditions
  currentPlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentActive = player0ActiveEl;
  currentScoreDisplay = current0El;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // currentActive.classList.remove("player--winner");
};

function checkScore() {
  const scoreToCheck = scores[currentPlayer];
  
  if (scoreToCheck >= 100) {
    // currentActive.classList.add("player--winner");
    alert(`Player ${currentPlayer + 1} has won the game! Play again?`);
    newGame();
  } else {
    switchPlayer();
  };
};