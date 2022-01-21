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

console.log("Coding Challenge #2 👩‍🏫");
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// ✅ 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// ✅ 2. And now let's use arrays! So create an array 'bills' containing the test data below
// ✅ 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// GOOD LUCK 😀

// Test data
const bills = [ 125, 555, 44 ];
const tips = [];
const totals = [
  // {
  //   bill: 0,
  //   tip: 0,
  //   total: 0
  // } // the desired shape of the objects to be stored in this array
]

// Create function
// function calculateTips(bill) {
//   let tip = 0;

//   if (bill <= 300 && bill >= 50) {
//     return tip = bill * .15;
//   } else {
//     return tip = bill * .20;
//   }
// }

// Refactor function to work on an array of bills
function calculateTips(array) {
  let tip = 0;

  return array.map(bill => {
    if (bill <= 300 && bill >= 50) {
      tips.push((bill * .15));
      return tip = bill * .15;
    } else {
      tips.push(bill * .20);
      return tip = bill * .20;
    }
  })
}

// console.log("tip for a bill of $100 >", calculateTips(100));
// console.log("tip for a bill of $15 >", calculateTips(1500));

calculateTips(bills);
console.log("the tips for an array of bills >", tips);

function calculateBillTotals(array) {
  // map through the array of numbers and create new objects to store several values
  return array.map(bill => {
    if (bill >= 50 && bill <= 300) {
      totals.push({
        bill: bill,
        tip: (bill * .15),
        total: bill + (bill * .15)
      })
    } else {
      totals.push({
        bill: bill,
        tip: (bill * .20),
        total: bill + (bill * .20)
      })
    }
  })
}

calculateBillTotals(bills);
console.log("the total of bills, itemized >", totals);