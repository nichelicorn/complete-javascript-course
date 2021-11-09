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
// 1. The world population is 7900 million people. ✅ Create a function declaration called 'percentageOfWorld1' which ✅ receives a 'population' value, and ✅ returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
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
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");