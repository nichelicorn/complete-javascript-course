console.log("👩‍💻 lesson exercises")

console.log("👩‍🏫 Lesson 2.9");
const js = "amazing";

console.log('My name is Computatron');
console.log(typeof 'My name is Computatron');

console.log("👩‍🏫 Lesson 2.10");
let firstName = "Nichele";
let lastName = "Lovelace"
console.log("variable firstName <>>>", firstName);
firstName = "Jim";
console.log("variable firstName <>>>", firstName);
firstName = "Sarah";
console.log("variable firstName <>>>", firstName);

const PI = 3.1415;

// these variable names provide context and detail about what kind of values are being stored; `myFirstJob` indicates that this job is associated with the `firstName` declared above
const myFirstJob = "greeter";
const myCurrentJob = "coding student";

// these variable names are just two different jobs; they don't provide context in relation to other variables; they may or may not be related to the `firstName`
const job1 = "greeter";
const job2 = "coding student";

console.log("👩‍🏫 Lesson 2.12");
// true;
let javascriptIsFun = true;
console.log('Is JavaScript fun?', javascriptIsFun);

// console.log('typeof evaluations 🧪');
console.log("typeof javascriptIsFun : ", typeof javascriptIsFun);
console.log("typeof true : ", typeof true);
console.log("typeof 13 : ", typeof 13);
console.log("typeof firstName : ", typeof firstName);

javascriptIsFun = "yes!";
console.log("typeof javascriptIsFun : ", typeof javascriptIsFun);

let year;
console.log('year <>>>', year); // these will return `undefined` until `year` is assigned a value
console.log('typeof year <>>>', typeof year); // these will return `undefined` until `year` is assigned a value

year = 2021;
console.log('year <>>>', year);
console.log('typeof year <>>>', typeof year);

// typeof error
console.log('typeof null <>>>', typeof null); 
// logs typeof null as an object; this is incorrect, and should return `null`, similar to the behavior exhibited by `undefined`

console.log("👩‍🏫 2.13 let, const, and var");
let age = 30;

age = 31; 
// `let` variables can be reassigned after the variable is been declared; this is known as "mutating" the variable

const nBirthYear = 1991;
// nBirthYear = 1990; 
// 👆 this is an invalid reassignment - `const` values can't be reassigned

// `var`
var job = "programmer";
job = "teacher"; 

pickle = "dill";
console.log("mysterious undeclared pickle <>>>", pickle);
// don't do this! now there's a global pickle

console.log("👩‍🏫 2.14 Basic Operators");
const currentYear = 2021;

const ageNichele = currentYear - nBirthYear;
console.log('Age of Nichele <>>>', ageNichele);

const jBirthYear = 1990;
const ageJim = currentYear - jBirthYear;
console.log('Age of Jim <>>>', ageJim);

console.log("Nichele age doubled <>>>", ageNichele * 2);
console.log("some weird math with Nichele's age <>>>", ageNichele ** 3, ageNichele - 17,  ageNichele / 2.77);
// ** is the exponentiation operator
// ageNichele ** 3 means ageNichele^3, or ageNichele * ageNichele * ageNichele

console.log('concat name <>>>', firstName + " " + lastName);
// can use the + operator to concatenate strings; need to include an additional + " " + to add a space between words / characters in different strings

// example of mathematical operators
// let x = 10 + 5; // addition
// x += 10; // add to the existing value
// x *= 4; // multiply by the existing value
// x++; // add one to existing value
// x--; // subtract one from the existing value
// x--;
// console.log("value of x <>>>", x);

// comparison operators
console.log("Is Nichele's age > than Jim's age?", ageNichele > ageJim);

console.log("Is Jim of age?", ageJim >= 18);

const isFullAge = ageNichele >= 18;

console.log("a comparison of years", currentYear - 1991 > currentYear - 2018);

console.log("👩‍🏫 Lesson 2.15 Operator Precedence");
let x, y;
// these are declared as empty variables, to be assigned later
x = y = 25 - 10 - 5;
// same as writing x = y = 10;
console.log("x <>>>", x);
console.log("y <>>>", y);

console.log("J and N's ages <>>>", ageJim, ageNichele);
const avgJandNAges = (ageJim + ageNichele) / 2;
console.log("average of J and N's ages", avgJandNAges);

console.log("👩‍🏫 2.17 Strings and Template Literals");
firstName = "River";
job = "Interdimensional archaeologist";
birthyear = undefined;

// using concatenation
let river = "I'm " + firstName + ", a " + (year - birthyear) + " year old " + job + "!";
console.log("River, using concatenation <>>>", river);

// using template literal
river = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
console.log("River, using template literal <>>>", river);

console.log("It is possible to write \n\
multi-line JS comments using the /n/ character. \n\ This is due to a JS bug!");

console.log("👩‍🏫 2.18 Taking Decisions : if/else statements");
age = 14;
const isOldEnough = age >= 18;

function evalDrivingAge(age) {
  if (isOldEnough) {
    console.log(`${firstName} can apply for a driving license 🚙`);
  } else {
    const yearsLeft = 18 - age;
    console.log(`${firstName} is not yet old enough to drive. Wait another ${yearsLeft} years to apply for a license.`);
  }
};

evalDrivingAge(age);

birthyear = 1991;
let century;

function evalBirthCentury(year) {
  if (birthyear <= 2000) {
    console.log(century = 20);
  } else {
    console.log(century = 21);
  }
};

console.log(evalBirthCentury(birthyear));


console.log("👩‍🏫  2.20 Type conversion and coercion");

console.log("type conversion");

const inputYear = "1991";

console.log("full age occurs in year ", (inputYear + 18));
// this example converts 18 to a string, and concatenates it with inputYear

console.log("full age occurs in year ", Number(inputYear) + 18);
// this example will return the string as a number - this is type conversion; using Number() does not alter the original value of inputYear

console.log("attempting to turn a string into a number 👇");
console.log(Number("Jonas"));
// returns NaN - "Jonas" cannot be evaluated into a real number

console.log("converting a number to a string 👇");
console.log(String(17));

console.log("type coercion");

console.log("I am " + 23 + " years old");
// converts 23 to a string; works with concatenation or template literals

console.log("will this give us a number or a string?", "23" - "10" - 3);
console.log(typeof ("23" - "10" - 3));

console.log("let n = `1` + 1 ");
let n = "1" + 1;
console.log("n <>>>", n);
console.log("n = n - 1")
n = n - 1;
console.log("n <>>>", n);

console.log("👩‍🏫 2.21 Truthy and Falsy values");
console.log("how do the following evaluate when using the JS `Boolean()` method?")
console.log("0", Boolean(0));
console.log("undefined", Boolean(undefined));
console.log("Nichele", Boolean("Nichele"));
console.log("{}", Boolean({}));
console.log("empty string", Boolean(""));

const money = 0;
// the truthy or falsyness of this value will determine which block of code is executed in the function checkForMoney

const checkForMoney = () => {
  if(money) {
    console.log("Don't spend all the money! 💰");
  } else {
    console.log("You don't have any money 💸");
  }
};

checkForMoney();

let height;
const checkForHeight = () => {
  if(height) {
    console.log("Yay! Height is defined");
  } else {
    console.log("Height is undefined");
  }
}

checkForHeight();

height = 60;
checkForHeight();

console.log("👩‍🏫  2.22 Equality operators");
const thisNumber = 18;

if (thisNumber === 18) console.log("The strict equality operator does not perform type coercion :D ");
if (thisNumber == "18") console.log("Type coercion does happen when using a loose equality operator");

let favNum = 77;
// favNum = Number(prompt("What's your favorite number?")); // stores the value of a user input prompt on windowload; without using type coercion, this is stored as a string
console.log("favNum <>>>", favNum);

if (favNum === 13) {
  console.log("Cool! 13 is a spooky number 👻");
} else if (favNum === 7) {
  console.log("You sure do like prime numbers! 🥩");
} else {
  console.log("All numbers are good numbers! 🌈 (but it's not 7 or 13)");
}

if (favNum !== 13) console.log("Don't you like spooky numbers?");

console.log("👩‍🏫 Lesson 2.23 Boolean Logic");
const boolA = favNum >= 20;
const boolB = favNum < 30;
console.log("check booleans a, b", boolA, boolB);

// the `not` operator
console.log("the not operator", !boolA);

// the `and` operator
console.log("the and operator", boolA && boolB);

// the `or` operator
console.log("the or operator", boolA || boolB);
// only false if both are actually false; will return true if one of these operators is true

console.log("👩‍🏫 Logical operators");
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B
console.log("hasDriversLicense", hasDriversLicense);
console.log("hasGoodVision", hasGoodVision);

console.log("hasDriversLicense && hasGoodVision",  hasDriversLicense && hasGoodVision); // will be false if one variable is false
console.log("hasDriversLicense || hasGoodVision", hasDriversLicense || hasGoodVision); // will be true if one variable si true
console.log("!hasDriversLicense", !hasDriversLicense); // will invert the current value of the variable

const licensedDriver = hasDriversLicense && hasGoodVision;

// if ( licensedDriver ) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive.");
// };

const isTired = false; // variable C
console.log("hasDriversLicense || hasGoodVision || isTired", hasDriversLicense || hasGoodVision || isTired);

if ( licensedDriver && !isTired ) { // if Sarah is a licensed driver and is not tired
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive.");
};

console.log("👩‍🏫 2.26 The Switch Statement");
const day = "Wednesday";

switch (day) {
  case "Monday": // day === Monday
    console.log("Create plan for the week 🎨");
    break; // inside a switch statement, without the break, the code continues executing until it reaches a break
  case "Tuesday":
    console.log("Have Tacos 🌮");
    break;
  case "Wednesday":
    console.log("Hope you're wearing pink today! 🐷");
    break;
  case "Thursday":
  case "Friday":
    console.log("Work on website 👩‍💻");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend! 🌞");
    break;
  default:
    console.log("Not a valid day of the week 🗓");
};

if (day === "Monday") {
    console.log("Create plan for the week 🎨");
} else if (day === "Tuesday") {
    console.log("Have Tacos 🌮");
} else if (day === "Wednesday") {
    console.log("Hope you're wearing pink today! 🐷");
} else if (day === "Thursday" || day === "Friday") {
    console.log("Work on website 👩‍💻");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Enjoy the weekend! 🌞");
} else {
    console.log("Not a valid day of the week 🗓");
};

console.log("👩‍🏫  2.27 Statements and Expressions");

if (23 > 10) {
  const string = "23 is bigger";
  console.log("string", string); 
}; // this is a statement, doesn't really produce a value, just declares a variable, `string`; ends with a semicolon

console.log(`I'm ${2037 - 1991} years old.`); // template literals work with expressions

console.log("👩‍🏫  2.28 The Conditional (Ternary) Operator");
const condAge = 33;
const ofAge = condAge >= 18 ? console.log("I like to drink wine 🍷")  : console.log("I like to drink tea 🧋");

// 👇 This creates one small, readable (assuming you know the syntax) expression
const drink = condAge >= 18 ? "🍷 wine" : "🧋 bubble tea";

// 👇 This is a lot to write / read!
let drink2;
if (condAge >= 18) {
  drink2 = "🍷";
} else {
  drink2 = "🧋";
};
console.log(drink2);

console.log(`I like to drink ${drink2}`);