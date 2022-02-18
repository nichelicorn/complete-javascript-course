'use strict';

// const message = document.querySelector(".message");
// console.log("message >", message);
// console.log(document.querySelector(".message").textContent);
// let phrase = message.textContent;
// console.log("phrase >", phrase);
// phrase = "new Content";
// console.log("phrase >", phrase);

// const number = document.querySelector(".number").textContent;
// number = 17;
// const score = document.querySelector(".score");

// 🔎 Query selectors
// none of these have been set to variables; all this is just happening out there in the global DOM

// select elements, and update the textContent of the element
// document.querySelector(".message").textContent = "Let's get to guessing!";
// document.querySelector(".number").textContent = 17;
// document.querySelector(".score").textContent = 77;

// select an element and get its value
// document.querySelector(".guess").value = 17; // updates the value
// console.log("guess ?", document.querySelector(".guess").value); // logs the value to the console

// define the secret number when the application begins
// Math.random() will return a random number
// adding * 20) + 1 will return a number between 1 and 20
// Math.trunc() will round off the decimal places
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("secret number >", secretNumber);
const number = document.querySelector(".number");
// number.textContent = secretNumber;
let message =  document.querySelector(".message");
// Set the score at the start of the game; decrement if an incorrect guess is made
let score = 20;
let highscore = 0;
// document.querySelector(".highscore").textContent = highscore;

// log the guess to the console using event handlers
// Listen for a click event on the `check!` button
// selects the button element
// When a user clicks on a button, retrieve the number
// make sure there is a value
// if there is not a value, alert the user
document.querySelector(".check").addEventListener("click", function() {
  // check the guess value
  const guess =  Number(document.querySelector(".guess").value);
  console.log("guess >", guess, ", a", typeof guess);

  // Display a message to the user based on the guess value
  // decrement the score when an incorrect guess is made (score is stored in a global / state variable; this will maintain the score throughout game play; the score is part of the application state)
  
  // if there is no input 👇
  if (!guess) {
    document.querySelector(".message").textContent = "🙅‍♀️ No guess!";

    // if the guess is correct 👇
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    highscore += score;
    console.log("highscore >", highscore);
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".message").textContent = "🎉 You got the number!";
    // update the page styles when the player wins the game
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // if the guess is too high 👇
  } else if ( guess > secretNumber) {
    if (score > 1) {
      message.textContent =  "👇 Your guess is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // score--;
      message.textContent = "🤷‍♀️ You used all your guesses! Start a new game.";
      document.querySelector(".score").textContent = 0;
    };

    // if the guess is too low 👇
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "👆 Your guess is too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // score--;
      message.textContent = "🤷‍♀️ You used all your guesses! Start a new game.";
      document.querySelector(".score").textContent = 0;
    }
  };


});

// challenge : implement game reset functionality so the player can play again
// steps are available if needed

const again = document.querySelector(".again");

// set event listener on again button
again.addEventListener("click", startNewGame);

function startNewGame() {
  console.log("new game starts now!");

  // if the game was won, add score to highscore
  // reset score to 20
  // clear input
  
  // set high score; moved to win condition so the score will display if the game is won
  // highscore += score;
  // console.log("highscore >", highscore);
  // document.querySelector(".highscore").textContent = highscore;

  // reset score  and message elements
  score = 20;
  document.querySelector(".score").textContent = score;
  console.log("score >", score);
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".guess").value = "",

  // reset page styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  // reset secretNumber and ?
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
};


//  additional things to add to this game
// prevent any numbers lower than 0 or higher than 20 from being entered in the input
// add a button to resest the scoreboard to zero (reset application state)
// relocate [Again!] button to the lower portion of the screen
// relocate (between...) instructions to appear below the number/? box
