'use strict';

// 💾 Application state
const scores = [0, 0];
let currentScore = 0;
let currentPlayer, currentScoreDisplay, currentActiveEl, isActiveGame;

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
window.addEventListener("load", startGame);
btnHold.addEventListener("click", holdScore);
btnNew.addEventListener("click", startGame);
btnRoll.addEventListener("click", takeTurn);

// Refactoring to-do list
// review code and add sensible helper functions
// Find actual rules for this game and make sure it matches what is set up
// Add how to play section to pig game UI
// Update the look of the pig game
// Add pigs to the pig game
// refactor startGame ... damn, it's huge and ugly
// use player id number as an argument and make these statements dynamic

// ⚙️ Functions
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
};

function takeTurn() {
  const roll = rollDice();
  
  displayDice(roll);

  roll !== 1 ? updateCurrentScore(roll) : switchPlayer();
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
  currentScore = 0;
  currentScoreDisplay.textContent = currentScore;

  currentPlayer = (currentPlayer === 0) ? 1 : 0;

  currentScoreDisplay = (currentScoreDisplay === current0El) ? current1El : current0El;

  toggleActive();
};

function toggleActive() {
  if (currentPlayer === 0) {
    player0ActiveEl.classList.add("player--active");
    player1ActiveEl.classList.remove("player--active");
  } else {
    player0ActiveEl.classList.remove("player--active");
    player1ActiveEl.classList.add("player--active");
  };
};

function holdScore() {
  scores[currentPlayer] += currentScore;

  currentPlayer === 0 ? 
  score0El.textContent = scores[0] : 
  score1El.textContent = scores[1];

  checkScore();
};

function startGame(event) {
  // 🎬 Starting conditions
  event.preventDefault();
  isActiveGame = true; 
  currentPlayer = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  // currentActiveEl = player0ActiveEl;
  currentScoreDisplay = current0El;
  diceEl.classList.add("hidden");
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0ActiveEl.classList.add("player--active");
  player1ActiveEl.classList.remove("player--active");
  player0ActiveEl.classList.remove("player--winner");    player1ActiveEl.classList.remove("player--winner")
  btnRoll.disabled = false;
  btnHold.disabled = false;;
};

function checkScore() {
  const scoreToCheck = scores[currentPlayer];

  scoreToCheck >= 100 ? endGame() : switchPlayer();
};

function endGame() {
  isActiveGame = false;

  currentPlayer === 0 ? 
    player0ActiveEl.classList.add("player--winner") : 
    player1ActiveEl.classList.add("player--winner");

  btnRoll.disabled = true;
  btnHold.disabled = true;
};