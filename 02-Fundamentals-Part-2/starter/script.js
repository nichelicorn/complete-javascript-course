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
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");