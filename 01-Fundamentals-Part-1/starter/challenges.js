console.log("🧪 coding challenge #1");
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 
// Your tasks: 
// √ 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 
 
// GOOD LUCK 😀

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// function calculateBmi(mass, height) {
//   return mass / height ** 2;
// }

const calculateBmi = (mass, height) => {
  return mass / height ** 2;
}

// let markBmi = markMass / markHeight ** 2;
let markBmi = calculateBmi(markMass, markHeight);
console.log("Mark's BMI <>>>", markBmi);
// let johnBmi = johnMass / (johnHeight * johnHeight);
let johnBmi = calculateBmi(johnMass, johnHeight);
console.log("John's BMI <>>>", johnBmi);
let markHigherBMI = markBmi >= johnBmi;
console.log("Is Mark's BMI higher than John's?   ", markHigherBMI);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

// markBmi = markMass / markHeight ** 2;
console.log("mark's new BMI <>>>", markBmi = calculateBmi(markMass, markHeight));
// johnBmi = johnMass / (johnHeight * johnHeight);
console.log("john's new BMI <>>>", johnBmi = calculateBmi(johnMass, johnHeight));
markHigherBMI = markBmi >= johnBmi;
console.log("Is Mark's BMI higher than John's?   ", markHigherBMI);

console.log("🧪 Coding challenge #2");
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
// Your tasks: 
// √ 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// √ 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
// √ Hint: Use an if/else statement 😉 
 
// GOOD LUCK 😀

function returnBmiMessage() {
  if (markHigherBMI) {
    console.log(`Mark's BMI of ${markBmi} is higher than John's BMI, at ${johnBmi} 🤷‍♂️`);
  } else {
    console.log(`John's BMI, measured at ${johnBmi}, is higher than Mark's BMI of ${markBmi} 🤷‍♂️`);
  }
}

returnBmiMessage();

console.log("🧪 Coding challenge #3");
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 

// Test data: 
// § Data 1: 
let dolphinsScore = [ 96, 108, 89]; // 293, avg = 97.666
let koalasScore =  [88, 91, 110]; // 289, avg = 96.333

// § Data Bonus 1: 
dolphinsScore = [97, 112, 101]; // 310, avg = 103.333
koalasScore = [109, 111, 123]; // 343, avg = 114.333
// § Data Bonus 2: 
// koalasScore =  [97, 112, 101]; // 310, avg = 103.333
 
// GOOD LUCK 😀 
// Your tasks: 

// 1. Calculate the average score for each team, using the test data ✅
// function getAvgScore(arr) {
//   return arr.reduce((num, total) => ((total += num) / arr.length));
// }; // this math is wrong! somehow it's returning a divisor of 5-ish, not the array length; not sure what the issue is here... reworking this function below

function getAvgScore(arr) {
  return arr.reduce((num, total) => {
    // console.log("number is a ", typeof num);
    // console.log("total is a ", typeof total);
    return total += num;
  }) / arr.length;
};

// Set values for average scores
const getDolphinsAvg = getAvgScore(dolphinsScore);
const getKoalasAvg = getAvgScore(koalasScore);
console.log("Average Dolphins score 🐬<>>>", getDolphinsAvg);
console.log("Average Koalas score 🐨<>>>", getKoalasAvg);

// Set a variable for the winner
let winner, winnerAvg, grandWinner;

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) ✅
// Create a variable hold the team name - this can be used in the interpolation to print the winner in the console ✅

function determineWinner(arrA, arrB) {
  const teamAAvg = getAvgScore(arrA);
  const teamBAvg = getAvgScore(arrB);
  console.log("team a average >", teamAAvg, "team b average >", teamBAvg);

  // assign the name based on the score
  let teamA, teamB;

  // Score checks
  // if (getAvgScore(arrA) === getAvgScore(dolphinsScore)) console.log("A: hello dolphin 🐬");
  // if (getAvgScore(arrA) === getAvgScore(koalasScore)) console.log("A: hello koala 🐨");
  // if (getAvgScore(arrB) === getAvgScore(dolphinsScore)) console.log("B: hello dolphin 🐬");
  // if (getAvgScore(arrB) === getAvgScore(koalasScore)) console.log("B: hello koala 🐨");

  // if ((getAvgScore(arrA) === getAvgScore(koalasScore)) || (getAvgScore(arrB) === getAvgScore(koalasScore))) {
  //   teamA = "Koalas";
  //   teamB = "Dolphins";
  // } else 
  // if ((getAvgScore(arrA) === getAvgScore(dolphinsScore)) || (getAvgScore(arrB) === getAvgScore(dolphinsScore))) {
    if (getAvgScore(arrA) === getAvgScore(dolphinsScore)) {
    console.log("team A are the 🐬🐬🐬🐬🐬🐬🐬!")
    teamA = "Dolphins 🐬";
    teamB = "Koalas 🐨"
  // } else if ((getAvgScore(arrA) === getAvgScore(koalasScore)) || (getAvgScore(arrB) === getAvgScore(koalasScore))) {
  } else if (getAvgScore(arrA) === getAvgScore(koalasScore)) {
    console.log("team A are the 🐨🐨🐨🐨🐨🐨🐨!")
    teamA = "Koalas 🐨";
    teamB = "Dolphins 🐬";
  };

  // console.log("teamA, teamB", teamA, teamB);

  if (teamAAvg > teamBAvg) {
    winner = teamA;
    winnerAvg = teamAAvg;
    console.log(`${teamA} win this round!`);
  } else if (teamBAvg > teamAAvg) {
    winner = teamB;
    winnerAvg = teamBAvg;
    console.log(`${teamB} win this round!`);
  } else if (teamAAvg === teamBAvg) {
    winner = "draw";
    winnerAvg = teamAAvg || teamBAvg;
    console.log(`No winner! The match between ${teamA} and ${teamB} is a draw! 🤝`);
  }

  // Test conditions
  // console.log("team A?", areDolphins, areKoalas);
  // console.log("team B?", areDolphins, areKoalas);
  // console.log("(teamAAvg > teamBAvg && areDolphins)??", (teamAAvg > teamBAvg && areDolphins));
  // console.log("(teamBAvg > teamAAvg && areDolphins)?", (teamBAvg > teamAAvg && areDolphins));
  // console.log("(teamBAvg > teamAAvg && areKoalas)?", (teamBAvg > teamAAvg && areKoalas));
  // console.log("(teamAAvg > teamBAvg && areKoalas)?", (teamAAvg > teamBAvg && areKoalas));
  // console.log("(teamAAvg === teamBAvg)?", (teamAAvg === teamBAvg));

  // if ((teamAAvg > teamBAvg && areDolphins) || (teamBAvg > teamAAvg && areDolphins)) {
  //   console.log(`Dolphins are the winners! 🐬🏆`);
  // } else if ((teamBAvg > teamAAvg && areKoalas) || (teamAAvg > teamBAvg && areKoalas)) {
  //   console.log(`Koalas are the winners! 🐨🏆`);
  // } else if (teamAAvg === teamBAvg) {
  //   console.log(`We have a draw!`);
  // };
  if ((teamA === winner) || (teamB === winner)) {
    return `${winner} win this round!`;
  } else {
    return winner;
  }

};

// determineWinner(dolphinsScore, koalasScore);
// determineWinner(koalasScore, dolphinsScore); 

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 


// invoke determineWinner
// validate average scores
// if winner && avg score >=  100 {declare winner} else {declare, despite having the highest score, you did meet the min score of 100 required to take the match points}
function declareGrandWinner(arrA, arrB) {

  determineWinner(arrA, arrB);
  console.log("the winner <>>>", winner);
  console.log("winnerAvg <>>>", winnerAvg);

  if (winnerAvg >= 100) {
    grandWinner = winner;
    console.log(`${grandWinner} are the grand winners, with over 100 points!`)
  } else if (winnerAvg < 100) {
    console.log(`Though they won the round, the ${winner} did not have 100 points, and no one wins the grand prize. 😿`);
  } else if (winner === "draw") {
    console.log(`This one was a draw! We'll play again soon.`);
  };
  console.log(grandWinner === winner);

  if (!grandWinner || (winner === "draw")) {
    console.log("There was no grand winner today. The trophy stands until the next match!");
  } else {
    console.log(`${grandWinner} have taken home the trophy!! 🏆`);
  };

};

declareGrandWinner(dolphinsScore, koalasScore);

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy ✅
