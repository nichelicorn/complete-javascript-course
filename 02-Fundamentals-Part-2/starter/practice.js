"use strict";

console.log("👩‍💻 Practice Exercises - JS Fundamentals Part 2");
// 1. Write a function called 'describeCountry' which takes three parameters:
  //  'country', 'population' and 'capitalCity'. Based on this input, thefunction returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

function describeCountry(name, pop, capCity) {
  return `${name} has a population of ${pop} million, and ${capCity} is its capital city.`;
}


// 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
const uniCountryDeets = describeCountry("Unicornia", 13, "Rainbonicus");
console.log("🦄🏳️‍🌈✨", uniCountryDeets);

const pigCountryDeets = describeCountry("Porktopia", 7, "Slopopolis");
console.log("🐷🏴‍☠️🍽", pigCountryDeets);

const fishCountryDeets = describeCountry("Atlantis", 999, "Alga Central Whirlpool");
console.log("🐟🇺🇳🍥", fishCountryDeets);

console.log("👩‍💻 Function Declarations vs Expressions");
// 1. The world population is 7900 million people. ✅ Create a function declaration called 'percentageOfWorld1' which ✅ receives a 'population' value, and ✅ returns the percentage of the world population that the given population represents. For example, China has 1411 million people, so it's about 18.2% of the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
// 3. ✅ Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
function populationDeclrn(pop) {
  // return the percentage of the country's population, given the total world population of 7900 million
  const totalPop = 7900;
  const percentage = Math.round((pop / totalPop) * 100);
  return percentage;
}

const usPopPctg = populationDeclrn(330);
console.log(`🇺🇸 Approximately ${usPopPctg}% of the world population lives in the United States.`);

const ethiopiaPopPctg = populationDeclrn(114);
console.log(`🇪🇹 Approximately ${ethiopiaPopPctg}% of the world population lives in Ethiopia.`);

const japanPopPctg = populationDeclrn(125);
console.log(`🇯🇵 Approximately ${japanPopPctg}% of the world population lives in Japan.`);

// 4. ✅ Create a function expression which does the exact same thing, called 'percentageOfWorld2', ✅ and also call it with 3 country populations (can be the same populations)

const populationAnon = function populationDeclrn(pop) {
  return (pop / 7900);
}

const taiwanPopPctg = populationAnon(23);
console.log(`🇹🇼 Approximately ${taiwanPopPctg}% of the world population lives in Taiwan.`);

const malawiPopPctg = populationAnon(19);
console.log(`🇲🇼 Approximately ${malawiPopPctg}% of the world population lives in Malawi.`);

const brazilPopPctg = populationAnon(214);
console.log(`🇧🇷 Approximately ${brazilPopPctg}% of the world population lives in Brazil.`);

console.log("👩‍💻  Arrow Functions");
// 1. ✅ Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
const populationArrow = (pop) => {
  const totalPop = 7900;
  return ( pop / totalPop ) * 100;
}

const canadaPopPctg = populationArrow(38);
console.log(`🇨🇦 Approximately ${canadaPopPctg}% of the world population lives in Canada.`);

console.log("👩‍💻 Functions Calling Other Functions");
// 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1411 million people, which is about 18.2% of the world.'
function describePopulation(country, pop) {
  const pctg = Math.round(pop / 7900 * 100);

  return `${country} has ${pop} million people, which is about ${pctg}% of the total world population!`;
}

// console.log(describePopulation("China", 1411));

// 2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
// console.log(populationDeclrn(1411));
function describeInvokingOtherFunction(country, pop) {
  const pctg = populationDeclrn(pop);

  return `${country} has ${pop} million people, which is about ${pctg}% of the total world population!`;
}

console.log(describeInvokingOtherFunction("China", 1411));

// 3. Call 'describePopulation' with data for 3 countries of your choice
console.log(describePopulation("India", 1384));
console.log(describePopulation("United States of America", 332));
console.log(describePopulation("Indonesia", 271));

console.log("👩‍💻 Introduction to Arrays");
// ✅ 1. Create an array containing 4 population values of 4 countries of your choice.You may use the values you have been using previously. Store this array into a variable called 'populations'
// ✅ 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

// populations of Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island
// source: https://en.wikipedia.org/wiki/Population_of_Canada_by_province_and_territory
const maritimeProvincePopulations = [ 938598, 747101, 519716, 142907 ];

console.log("the array has 4 elements <>>>", maritimeProvincePopulations.length === 4);

function calculatePercentage(array) {
  return array.map(num => populationDeclrn(num));
}

// this is returning math, but the numbers are below the threshold to round to 1; correct population numbers for the maritime provinces should be represented as .num, as they are all below 1 million inhabitants
const maritimeProvincePercentages = calculatePercentage(maritimeProvincePopulations);
console.log("Maritime province population percentages <>>>", maritimeProvincePercentages);

// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");