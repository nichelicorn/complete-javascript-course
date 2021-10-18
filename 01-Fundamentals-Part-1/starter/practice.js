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
// console.log(`Is ${country} an island? ${isIsland}! The main language spoken is ${language}.`);

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

console.log("📝 Type Conversion and Coercion");
// 1. Predict the result of these 5 operations without executing them: 
console.log("the operation '9' - '5' will log '95'");
console.log(('95' === '9' - '5'));
console.log('9' - '5');
// WRONG!!!! I didn't use my eyeballs - the `-` operator indicates this would be converted to a number 🤦‍♀️
// logs the number 4
console.log("the operation '19' - '13' + '17' will log  23");
console.log(23 === ('19' - '13' + '17'));
console.log('19' - '13' + '17'); 
// does the coercion stay as a number, or will it switch back to a string? i think it will stay a number
// AUGH!!! Wrong again!!! this converted '19' - '13'
console.log("the operation '19' - '13' + 17 will log  23");
console.log(23 === ('19' - '13' + 17));
console.log('19' - '13' + 17); 
// i think this one will also log a the number 23
// 🎉
console.log("the operation '123' < 57 will log false");
console.log('123' < 57); 
// 🎉
console.log("the operation 5 + 6 + '4' + 9 - 4 - 2 will log 1143"); 
console.log(1143 === (5 + 6 + '4' + 9 - 4 - 2));
console.log(5 + 6 + '4' + 9 - 4 - 2);
// not sure if this is correct, just tried something out with adding strings and numbers 
// 🎉
// 2. Execute the operations to check if you were right
// i got two of these wrong, and three of these correct
// make sure to READ THE PROBLEM THOROUGHLY, then read it again

console.log("📝 Equality Operators : == vs ===");
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?'); 
// const numNeighbours = Number(prompt("How many neighboring countries does your country have?"));
// console.log("numNeighbours <>>>", typeof numNeighbours);

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now) 
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1 
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value) 
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours === 0) {
  console.log("No borders! Are you on an island?");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
}

// 5. Test the code with different values of 'numNeighbours', including 1 and 0. ✅

// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening? 
// updated numNeighbors to set the value using the `Number()` function, converting the returned value to a number

// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1 ✅

// 8. Reflect on why we should use the === operator and type conversion in this situation 
// Using the strict equality operator ensures operations are only performed on like data types; type coercion will occasionally allow code to function as expected, but incorrect data types may cause issues down the line which are unaccounted for in the codebase

console.log("📝 Logical Operators");
// 1. Comment out the previous code so the prompt doesn't get in the way ✅

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island. 
// s's desired country has three conditions : 
  // speaks english
  // has less than 50 million people
  // is not an island
// const sarahsNewCountry =   

// 3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary. 


// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :(' 


// 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D) 