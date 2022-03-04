'use strict';

// 💾 Application state
let currentScore = 0;
let currentPlayer, currentScoreDisplay, currentActive, isActiveGame;
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
window.addEventListener("load", startGame);
btnHold.addEventListener("click", holdScore);
btnNew.addEventListener("click", startGame);
btnRoll.addEventListener("click", takeTurn);

// ⚙️ Functions

// Refactoring to-do list
// fix active player display error -- if player 2 wins the game, the white overlay doesn't apply to the correct player; scores / state still updating correctly
// add function to endGame that contains conditions if there is a winner
// refactor to ternaries
// add helper functions if avail

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
// fix active player display error -- if player 2 wins the game, the white overlay doesn't apply to the correct player; scores / state still updating correctly
   //  🐛 this is where the bug is -- it's just toggling these modes, not verifying the active player and displaying that
  // go back to using the currentActive? seemed like it worked okay when that was being used
  // hopefully this is in the git history

  console.log("new current player >", currentPlayer + 1);

  if (currentPlayer === 0) {
    player0ActiveEl.classList.add("player--active");
    player1ActiveEl.classList.remove("player--active");

  } else {
    player0ActiveEl.classList.remove("player--active");
    player1ActiveEl.classList.add("player--active");

  }

   
  //  console.log("checking currentActive >", currentActive);

  // if (currentActive.classList.contains("player--0")) {
  //   console.log("current player is now player 2");
  //   currentActive = player0ActiveEl;
  // } else {
  //   currentActive = player1ActiveEl;
  //   console.log("current player is now player 1");
  // }

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

function startGame(event) {
  // 🎬 Starting conditions
  event.preventDefault();
  currentPlayer = 0;
  currentScore = 0;
  isActiveGame = true; 
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentActive = player0ActiveEl;
  currentScoreDisplay = current0El;
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
  console.log("checking player >", currentPlayer + 1);

  // console.log("checking currentActive >", currentActive);

  if (scoreToCheck >= 10) {
    // alert(`Player ${currentPlayer} has won the game! Play again?`);
    console.log(`Player ${currentPlayer + 1} has won the game!`);
    isActiveGame = false;

    if (currentPlayer === 0) {
     player0ActiveEl.classList.add("player--winner");
   } else {
     player1ActiveEl.classList.add("player--winner");
   };

   btnRoll.disabled = true;
   btnHold.disabled = true;

  } else {
    switchPlayer();
  };
  // console.log("isActiveGame >", isActiveGame);
  
  
};