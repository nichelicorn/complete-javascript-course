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
number.textContent = secretNumber;
let message =  document.querySelector(".message");
// Set the score at the start of the game; decrement if an incorrect guess is made
let score = 20;

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
  // display updated score in the DOM
  if (!guess) {
    document.querySelector(".message").textContent = "🙅‍♀️ No guess!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 You got the number!";
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
