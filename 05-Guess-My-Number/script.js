// Future iterations:
// prevent any numbers lower than 0 or higher than 20 from being entered in the input
// add a button to resest the scoreboard to zero (reset application state)
// relocate [Again!] button to the lower portion of the screen
// relocate (between...) instructions to appear below the number/? box

'use strict';

// 🔎 Query selectors
let guess = document.querySelector(".guess");
let message =  document.querySelector(".message");
let scoreDisplay = document.querySelector(".score");
let highscoreDisplay =  document.querySelector(".highscore");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const check = document.querySelector(".check");
const body = document.querySelector("body");

// 💾 Application state
let secretNumber;
let score = 20;
let highscore = 0;

// 🎧 Event listeners
window.addEventListener("load", startGame);
check.addEventListener("click", checkInput);
again.addEventListener("click", startNewGame);

// ⚙️ Functions
function startGame() {
  secretNumber = getSecretNumber();
  number.textContent = "?";
  guess.value  = null;
};

function checkInput() {
  const thisGuess =  Number(document.querySelector(".guess").value);

  if (!thisGuess) {
    displayNoGuess();
  } else if (thisGuess === secretNumber) {
    displayCorrectGuess();
  } else {
    displayIncorrectGuess(thisGuess);
  }
};

function displayNoGuess() {
 message.textContent = "🙅‍♀️ No guess!";
};

function displayCorrectGuess() {
  highscore += score;
  number.textContent = secretNumber;
  highscoreDisplay.textContent = highscore;
  message.textContent = "🎉 You got the number!";

  // update the page styles when the player wins the game
  body.style.backgroundColor = "#60b347";
  number.style.width = "30rem";
};

function displayIncorrectGuess(thisGuess) {
  score--;
  scoreDisplay.textContent = score;

  // if (thisGuess > secretNumber) {
  //   message.textContent =  "👇 Your guess is too high!";
  // } else if (thisGuess < secretNumber) {
  //   message.textContent = "👆 Your guess is too low!";
  // };
  (thisGuess > secretNumber) ? message.textContent =  "👇 Your guess is too high!" : message.textContent = "👆 Your guess is too low!";
};

function startNewGame() {
  score = 20;
  scoreDisplay.textContent = score;
  message.textContent = "Start guessing";
  guess.value = "",

  // reset page styles
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";

  // reset secretNumber and ?
  secretNumber = getSecretNumber();
  number.textContent = "?";
};

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
};