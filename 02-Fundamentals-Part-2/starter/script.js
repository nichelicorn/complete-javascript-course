"use strict";
console.log("👩‍🏫 Section 3 - JavaScript Fundamentals Part 2");

console.log("👩‍🏫 Activating Strict Mode");
// statement on first line activates Strict Mode (SM)
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // in SM, omit part of the name to force an error; without SM, this line creates a new variable and assignes its value
if (hasDriversLicense) console.log("I can drive 🏎");

// const interface = "Audio"; // interface is a reserved identifier; can't use this variable name when using SM
// const private = 777; // private is also a reserved identifier

console.log("👩‍🏫 Functions");
function logger() {
  console.log("My name is Nichele 🛼");
}

// invoke the function, run the function, call the function
logger();

// function creates juice from the fruits passed through
function fruitProcessor(numApples, numOranges) {
  const juice = `Your juice was made with ${numApples} apples and ${numOranges} oranges.`;
  return juice; 
}

fruitProcessor(2, 3); // store this value in a variable to use the returned value of `juice` in the script
const morningBev = fruitProcessor(1, 3);
console.log("🌞🧃", morningBev);
const orangeOnly = fruitProcessor(0, 3);
console.log("🍊🍊🍊!", orangeOnly);

// built-in JS function that converts a string to a number; only works on strings made of numerical characters
const num = Number("77");
console.log("🔢", typeof num, num);

console.log("👩‍🏫  Function Declarations vs. Expressions");

const earlyAge = calcAge(0);
console.log("function declarations can be invoked prior to their declaration in the codebase", earlyAge);

// Function declaration
// yob = year of birth
function calcAge(yob) {
  const thisYear = new Date().getFullYear();
  // console.log("thisYear", thisYear);
  const age = thisYear - yob;
  return age;
}

const nAge = calcAge(1913);
const jAge = calcAge(1904);
console.log(nAge, jAge);

// Function expression
const calcAgeAnon = function birthYear(yob) {
  const thisYear = new Date().getFullYear();
  const age = thisYear - yob;
  return age;
}

const anonAge = calcAgeAnon(1911);
console.log("anon age", anonAge);

console.log("👩‍🏫  Arrow Functions");
// One line arrow function
// const birthYear = 2002;
// birthYear is the parameter here
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1001);
console.log("age3 <>>>", age3);

// Multi-line arrow function
const yearsToRetirement = (birthYear, name) => {
  // calculate retirement age - currentAge
  const age = 2021 - birthYear;
  const retirement = 65 - age;

  // return retirement;
  return `${name}, you have ${retirement} years until retirement 🧖‍♀️`;
}

console.log(yearsToRetirement(1982, "Nichelicorn"));
console.log(yearsToRetirement(1978, "BigBike96"))

console.log("👩‍🏫  Functions Calling Other Functions");
// Fruit must be chopped before adding to the processor
function frootChopper(numFruits) {
  // return the fruit chopped into four pieces
  return numFruits * 4;
}

function frootProcessor(numApples, numOranges) {
  const applePieces = frootChopper(numApples);
  const orangePieces = frootChopper(numOranges);

  const juice = `Your juice was made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice; 
}

console.log(frootProcessor(2, 3));

console.log("👩‍🏫 Reviewing Functions");
const calcul8Age = function (birthYear) {
  return 2037 - birthYear;
}

const yrsToRetire = function (birthYear, name) {
  // calculate retirement age - currentAge
  const age = calcul8Age(birthYear);
  const retirement = 65 - age;

  // return retirement based on the number of years remaining
 if (retirement > 0) {
  return `${name}, you have ${retirement} years until retirement 🧖‍♀️`;
} else {
   return `${name} has already retired!`;
 }
};

console.log(yrsToRetire(1999, "Shang-Chi"));
console.log(yrsToRetire(1001, "Wenwu"));



// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");