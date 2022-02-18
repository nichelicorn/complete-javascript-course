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

// log the guess to the console using event handlers
// Listen for a click event on the `check!` button
// selects the button element
// When a user clicks on a button, retrieve the number
// make sure there is a value
// if there is not a value, alert the user
document.querySelector(".check").addEventListener("click", function() {
  const guess =  Number(document.querySelector(".guess").value);
  console.log("guess >", guess, ", a", typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🙅‍♀️ No guess!";
  }
});
