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

console.log("👩‍🏫  Introduction to Arrays");
// can set variables individually, but this is time consuming and takes up a lot of space in code
const friend1 = "Ahsoka";
const friend2 = "Rex";
const friend3 = "Anakin";

// use an array to group like values together so they can be accessed and referenced as a group
const friends = ["Ahsoka", "Rex", "Anakin"];
console.log("friends, array literal", friends);

const years = new Array(103332, 102323, 104829);
console.log("years, made with `new Array()` function,", years);

console.log("the first element in the friends array <>>>", friends[0]);
console.log("the number of friends <>>>", friends.length);
console.log("the middle friend <>>>", friends[1]);
console.log("the last friend <>>>", friends[friends.length - 1]);

// mutate the array: change the name of the last friend in the array
friends[2] = "Mace";
console.log("new friends array <>>>", friends);

const ahsoka = ["Ahsoka", "Tano", 336, undefined, "Jedi", friends];

console.log("Ahsoka details <>>>", ahsoka);
console.log("how many details?", ahsoka.length);

// Exercise
// use the calcAge function on the array below and store the results in a new array
const theseYears = [1990, 1967, 2002, 2010, 2018];

function createAgeArray(array) {
  return array.map(year => calcAge(year));
};

const theseAges = createAgeArray(theseYears);
console.log("ages array <>>>", theseAges);

console.log("👩‍🏫 Basic Array Operations (Methods)");

// add a name to the end of the `friends` array
friends.push("Chewbacca");
console.log("a new friend <>>>", friends);
// const newLength = friends.push("Chewbacca");
// console.log("newLength <>>>", newLength);

// add a name to the beginning of the `friends` array
friends.unshift("Anakin");
console.log("a new friend <>>>", friends);
// console.log("new length <>>>", friends.unshift("Anakin"));

// remove the last element from the array
friends.pop();
console.log("one less friend <>>>", friends);
const poppedFriend = friends.pop();
console.log("the popped friend <>>>", poppedFriend);
console.log("one less friend <>>>", friends);

// remove the first element from the array
friends.shift();
console.log("one less friend <>>>", friends);

// find the index of a known element
console.log("index of Ahsoka <>>>", friends.indexOf("Ahsoka"));
console.log("index of unknown element <>>>", friends.indexOf("unknown"));

// determine if an element exists within an array
console.log("there is a friend named Din Djarin <>>>", friends.includes("Din Djarin"));

console.log("👩‍🏫  42. Introduction to Objects");

const ahsokaArray = [
  "Ahsoka",
  "Tano",
  36 - 20,
  "Jedi",
  friends
];

const ahsokaObj = {
  firstName: "Ahsoka",
  lastName: "Tano",
  born: 36,
  died: undefined,
  job: "Jedi",
  friends: ["Chewbacca", "Rex", "Anakin"]
}

console.log("👩‍🏫 43. Dot vs. Bracket Notation");
// The object
console.log("Ahsoka details >", ahsokaObj);

// dot notation
console.log("Ahsoka's last name, dots >", ahsokaObj.lastName);

// bracket notation
console.log("Ahsoka's last name, brackets >", ahsokaObj["lastName"]);

// store the name only; this variable will be set to search the object for any value containing the value of `nameKey`
const nameKey = "Name";
console.log("first name using brackets and a special key >", ahsokaObj["first" + nameKey]);
console.log("last name using brackets and a special key >", ahsokaObj["last" + nameKey]);

// what if we don't know which property we want to show?
// this uses a built-in JS function that creates an input field; user will input one of the options and that value will be returned in the console
// const interestedIn = prompt("What do you want to know about Ahsoka? Input firstName, lastName, born, died, job, or friends");
// console.log("user is interested in >", interestedIn);
// using dot notation
// console.log("interested in prompt with dots >", ahsokaObj.interestedIn);
// using bracket notation
// console.log("interested in propt with brackets >", ahsokaObj[interestedIn]);

// return a message when an undefined value is selected
function printObjectDetail(obj) {
  if(obj[interestedIn]) {
    console.log(`Ahsoka's ${interestedIn} is / are ${obj[interestedIn]}`);
  } else {
    console.log(`The ${interestedIn} is undefined.`);
  }
}

// printObjectDetail(ahsokaObj);

ahsokaObj.location = "Coruscant";
ahsokaObj["twitter"] = "@not_a_jedi";

// challenge - print a string with Ahsoka's first three friends, and the first friend in the array is the best friend; do not hardcode these values
console.log("Ahsoka's best friend!");
console.log(`${ahsokaObj.firstName}'s closest friends are ${ahsokaObj["friends"]}, and her best friend is ${ahsokaObj["friends"][0]}`);

console.log("Jonas' solution >", `${ahsokaObj.firstName} has ${ahsokaObj.friends.length} friends. ${ahsokaObj.firstName}'s best friend is ${ahsokaObj.friends[0]}.`);

console.log("👩‍🏫 44. Object Methods");
// object data source : https://starwars.fandom.com/wiki/Chewbacca
// object methods : functions that are set as the value of an object
const chewbacca = {
  firstName: "Chewbacca",
  lastName: null,
  born: 200,
  died: undefined,
  job: "Resistance Fighter",
  friends: ["Ahsoka", "Han Solo", "Luke Skywalker"],
  isForceWielder: false,

  // set a method using a function expression
  // calcAge: function(born) {
  //   return born - 0;
  // }

  // set the method using `this`
  // calcAge: function() {
  //   // console.log("this >", this);
  //   return this.born - 0;
  // }

  // use the method to store a new property
  calcAge: function() {
    // calculage the age
    this.age = this.born - 0;
    // return the age and store in the object
    return this.age;
  },

  // use a method to print object details
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.isForceWielder ? "is" : "is not"} a Force wielder.`
  }
};

// console.log("Chewbacca's age >", chewbacca.calcAge(chewbacca.born));
console.log("Chewbacca's age, this >", chewbacca.calcAge());
// repeat the call multiple times; probably not best practice! calculate the age once to store in the object, then retrieve when it is needed
// console.log("Chewbacca's age, this >", chewbacca.calcAge());
// console.log("Chewbacca's age, this >", chewbacca.calcAge());
// console.log("Chewbacca's age, this >", chewbacca.calcAge());

// now call the age using the object property that has been set
console.log("set the age value >", chewbacca.calcAge());
console.log("the age value >", chewbacca.age);

// 🧪 Challenge : return a string that describes the object properties; ex: Chewbacca is a {age} year old {job} who {is or is not} a Force Wielder.
function printCharacterDetails(object) {
  const theForce = () => object.isForceWielder ? "is" : "is not";

  console.log("the force?", theForce());

  return `${object.firstName} is a ${object.calcAge()} year old ${object.job} who ${theForce()} a Force Wielder. 🌌`
}

console.log("Chewbacca details function >", printCharacterDetails(chewbacca));

// console.log("ahsokaObj >", ahsokaObj);
// Add properties to ahsokaObj
ahsokaObj.isForceWielder = true;
ahsokaObj.calcAge = function() {
  this.age = this.born - 0;
  return this.age;
};

console.log("Ahsoka details function >", printCharacterDetails(ahsokaObj));

console.log("chewbacca details using object method >", chewbacca.getSummary());

// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");
// console.log("👩‍🏫 ");