// Future iterations:
// prevent any numbers lower than 0 or higher than 20 from being entered in the input
// add a button to resest the scoreboard to zero (reset application state)
// relocate [Again!] button to the lower portion of the screen
// relocate (between...) instructions to appear below the number/? box

// Refactoring
// assign query selectors to variables for readabilitly -- determine if it makes more sense for them to be defined inside function or globally
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

  // if there is no input 👇
  if (!thisGuess) {
   message.textContent = "🙅‍♀️ No guess!";

    // if the guess is correct 👇
  } else if (thisGuess === secretNumber) {
    number.textContent = secretNumber;
    highscore += score;
    // console.log("highscore >", highscore);
    highscoreDisplay.textContent = highscore;
    message.textContent = "🎉 You got the number!";

    // update the page styles when the player wins the game
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    

    // if the guess is too high 👇
  } else if ( thisGuess > secretNumber) {
    if (score > 1) {
      message.textContent =  "👇 Your guess is too high!";
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = "🤷‍♀️ You used all your guesses! Start a new game.";
      scoreDisplay.textContent = 0;
    };

    // if the guess is too low 👇
  } else if (thisGuess < secretNumber) {
    if (score > 1) {
      message.textContent = "👆 Your guess is too low!";
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = "🤷‍♀️ You used all your guesses! Start a new game.";
      scoreDisplay.textContent = 0;
    }
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
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
};