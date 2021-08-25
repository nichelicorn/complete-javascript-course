// Practice Exercises, divided by lesson
console.log("📚 Practice exercises");

console.log("📝 Values and Variables");
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) 
// 2. Log their values to the console

const country = "The United States";
const continent = "North America";
let population = 328; // listed as the nearest whole number in millions

console.log(`The country ${country} is located on the continent of ${continent}. The population is currently estimated at around ${population} million people.`);

console.log("📝 Data Types");
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.
// 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.

const isIsland = false;
let language;

console.log(`Is ${country} an island? ${isIsland}! The main language spoken is ${language}.`);

console.log("📝 let, const, and var");
// 1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one) 
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const. ✅
// 3. Try to change one of the changed variables now, and observe what happens

language = "English";
// should now interpolate a string instead of `undefined`
console.log(`Is ${country} an island? ${isIsland}! The main language spoken is ${language}.`);

// isIsland = true;
// Uncaught TypeError: invalid assignment to const 'isIsland'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment
// cannot reassign a `const` variable; these values can not be reassigned (they are NOT immutable, according to MDN)

console.log("📝 Basic Operators");
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half? 
let halfPopulation = population / 2;
console.log("the population of two halves <>>>", halfPopulation);

// 2. Increase the population of your country by 1 and log the result to the console 
population++;
console.log("increased population <>>>", population);

// 3. Finland has a population of 6 million. Does your country have more people than Finland? 
let compToFinland = population >= 6;
console.log(`Is the population of ${country} greater than that of Finland's 6 million?   `, compToFinland);

// 4. The average population of a country is 33 million people. Does your country have less people than the average country? 
let avgPopulation = 33;
console.log(`Is the population of ${country} greater than the average country's population of 33 million?   `, population >= avgPopulation);

// 5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 
let description = "Portugal is in Europe, and its 11 million people speak Portuguese.";
console.log("string format <>>>", description);

console.log("📝 Strings and Template Literals");
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax 
let euroCountry = "Portugal";
let euroPop = 11;
let euroLanguage = "Portuguese";
description = `${euroCountry} is in Europe, and its ${euroPop} million people speak ${euroLanguage}.`;
console.log("template literal format <>>>", description);

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

console.log("📝 Taking Decisions: if / else Statements");
// 1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

const evalAvgPopulation = () => {
  if (population > avgPopulation) {
    console.log(`${country}'s population is greater than the global national average.`);
  } else {
    console.log(`${country}'s population is ${avgPopulation - population} million below the global national average.`);
  }
};

evalAvgPopulation();

// 2. After checking the result, change the population temporarily to 13 ( returns the else block of code ) and then to 130 (returns the if block of code ). See the different results, and set the population back to original
// ✅

console.log("🧪 Coding Challenge #2");
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