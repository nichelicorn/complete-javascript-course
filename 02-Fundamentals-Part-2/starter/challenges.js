"use strict";

// JavaScript Fundamentals – Part 2
console.log("Fundamentals Part 2 - Coding Challenges 👩‍🏫");

console.log("Coding Challenge #1");
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!

// Your tasks:
// ✅ 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// ✅ 2. Use the function to calculate the average for both teams
// ✅ 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// ✅ 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// ✅ 5. Ignore draws this time
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀

// Test data:
const dolphScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];
const dolphScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

function calcAverage(array) {
  // calculate the average of numbers in the array
  let totalPoints = 0;
  const numOfGames = array.length;

  array.forEach(score => totalPoints += score);

  const average = totalPoints / numOfGames;

  return average;

}

const dolphsAvg1 = calcAverage(dolphScores1);
const dolphsAvg2 = calcAverage(dolphScores2);
const koalasAvg1 = calcAverage(koalasScores1);
const koalasAvg2 = calcAverage(koalasScores2);

console.log("dolphins set 1 average 🐬", dolphsAvg1);
console.log("koalas set 1 average 🐨", koalasAvg1);
console.log("dolphins set 2 average 🐬", dolphsAvg2);
console.log("koalas set 2 average 🐨", koalasAvg2);

function checkWinner(dolphAvg, koalasAvg) {
  // A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!
  if (dolphAvg > (koalasAvg * 2)) {
    return `Dolphins win with an average score of ${dolphAvg}! 🐬`
  } else if (koalasAvg > (dolphAvg * 2)) {
    return `Koalas win with an average score of ${koalasAvg}! 🐨`;
  } else {
    return `No team was the winner today. Come back for the next match! 🙌`;
  }
}

console.log("Match one results: ", checkWinner(dolphsAvg1, koalasAvg1));
console.log("Match two results: ", checkWinner(dolphsAvg2, koalasAvg2));