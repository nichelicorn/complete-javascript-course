// Future iterations:
// prevent any numbers lower than 0 or higher than 20 from being entered in the input
// add a button to resest the scoreboard to zero (reset application state)
// relocate [Again!] button to the lower portion of the screen
// relocate (between...) instructions to appear below the number/? box

// Refactoring
// gameplay functionality > refactor this into separate event listener / helper function
// break out guess checks into a separate function(s)

'use strict';

// 🔎 Query selectors
let guess = document.querySelector(".guess");
let message =  document.querySelector(".message");
let scoreDisplay = document.querySelector(".score");
let highscoreDisplay =  document.querySelector(".highscore");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const check = document.querySelector(".check");

// 💾 Application state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log("secret number >", secretNumber);
let score = 20;
let highscore = 0;

// 🎧 Event listeners
again.addEventListener("click", startNewGame);
check.addEventListener("click", checkInput);

// ⚙️ Functions
function checkInput() {
  const thisGuess =  Number(document.querySelector(".guess").value);

  // if there is no input
  if (!thisGuess) {
  displayNoGuess();
    
    // if the guess is correct
  } else if (thisGuess === secretNumber) {
    displayCorrectGuess();
  
  // if the guess is incorrect
  } else {
    displayIncorrectGuess(thisGuess);
  }
};

function displayNoGuess() {
 message.textContent = "🙅‍♀️ No guess!";
};


function displayCorrectGuess() {
    number.textContent = secretNumber;
    highscore += score;
    highscoreDisplay.textContent = highscore;
    message.textContent = "🎉 You got the number!";

    // update the page styles when the player wins the game
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
};

function displayIncorrectGuess(thisGuess) {
  score--;
  scoreDisplay.textContent = score;

  if (thisGuess > secretNumber) {
    message.textContent =  "👇 Your guess is too high!";
  } else if (thisGuess < secretNumber) {
    message.textContent = "👆 Your guess is too low!";
  };
};

function startNewGame() {
  // console.log("new game starts now!");

  score = 20;
  scoreDisplay.textContent = score;
  // console.log("score >", score);
  message.textContent = "Start guessing";
  document.querySelector(".guess").value = "",

  // reset page styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  // reset secretNumber and ?
  secretNumber = getSecretNumber();
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
};

function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
};