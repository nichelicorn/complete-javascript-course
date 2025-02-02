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
function populationCalculator(pop) {
  // return the percentage of the country's population, given the total world population of 7900 million
  const totalPop = 7900;
  const percentage = Math.round((pop / totalPop) * 100);
  return percentage;
}

const usPopPctg = populationCalculator(330);
console.log(`🇺🇸 Approximately ${usPopPctg}% of the world population lives in the United States.`);

const ethiopiaPopPctg = populationCalculator(114);
console.log(`🇪🇹 Approximately ${ethiopiaPopPctg}% of the world population lives in Ethiopia.`);

const japanPopPctg = populationCalculator(125);
console.log(`🇯🇵 Approximately ${japanPopPctg}% of the world population lives in Japan.`);

// 4. ✅ Create a function expression which does the exact same thing, called 'percentageOfWorld2', ✅ and also call it with 3 country populations (can be the same populations)

const populationAnon = function populationCalculator(pop) {
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
// console.log(populationCalculator(1411));
function describeInvokingOtherFunction(country, pop) {
  const pctg = populationCalculator(pop);

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
  return array.map(num => populationCalculator(num));
}

// this is returning math, but the numbers are below the threshold to round to 1; correct population numbers for the maritime provinces should be represented as .num, as they are all below 1 million inhabitants
const maritimeProvincePercentages = calculatePercentage(maritimeProvincePopulations);
console.log("Maritime province population percentages <>>>", maritimeProvincePercentages);

console.log("👩‍💻 Basic Array Operations (Methods)");
// ✅ 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
// ✅ 2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
// ✅ 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
// ✅ 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

// map of the Galaxy : https://i.redd.it/s74gby7ikouy.jpg

const centralCountry = "Taris"
const neighbours = [ "Null", "G'wenee", "Ploo", "Myrkr", "Wayland", "Mandalore" ]

console.log("home planet >", centralCountry);
console.log("current neighbours of Taris 🪐 >", neighbours);

const newUtopia = neighbours.push("Utopia");
console.log("current neighbours of Taris 🪐 >", neighbours);

const disbandedUtopia = neighbours.pop();
console.log("current neighbours of Taris 🪐 >", neighbours);

const checkForGermany = () => {
  if (!neighbours.includes("Germany")) {
    return "Germany not found. You are not in central Europe."
  } else {
    return "You have discovered Germany in the outer reaches! 🌌"
  }
}
console.log(checkForGermany());

const findMandalore = neighbours.indexOf("Mandalore");
console.log("Mandalore can be found at index >", findMandalore);
neighbours[findMandalore] = "New Mandalore";
console.log("current neighbours of Taris 🪐 >", neighbours);

console.log("👩‍💻 Introduction to Objects");
// 1. Create an object called 'malawi' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)
// source : https://en.wikipedia.org/wiki/Malawi
const malawi = {
  name: "Malawi",
  capital: "Lilongwe",
  language: ["English", "Chewa", "Yao", "Tumbuka", "Tonga", "Sena", "Lomwe", "Ngonde", "Lambya"],
  population: 19129952,
  neighbours: ["Zambia", "Tanzania", "Mozambique"]
}
console.log("Malawi data >", malawi);

console.log("👩‍💻 Dot vs. Bracket Notation");
// ✅ 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// ✅ 2. ✅ Increase the country's population by two million using dot notation, and ✅ then decrease it by 1.5 million using brackets notation.
console.log("Malawi one minute elevator speech 🛗");

function printCountryDetails(country) {
  return `${country.name} has a population of ${country.population} people. The most-spoken language in ${country.name} is ${country.language[0]}. ${country.name} has several neighbours, including ${country.neighbours[0]} and ${country.neighbours[2]}. ${country.capital} is ${country.name}'s capital city.`
}

console.log(printCountryDetails(malawi));

malawi.population += 2000000;
console.log("a dot notation increase in Malawi's population >", malawi.population);
malawi["population"] -= 1500000;
console.log("a bracket notation decrease in Malawi's population >", malawi.population);

console.log("👩‍💻 Object Methods");
// ✅ 1. Add a method called 'describe' to the 'malawi' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
// ✅ 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'malawi' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

malawi.describe = function() {
  return `${this.name} has a population of ${this.population} people. The most-spoken language in ${this.name} is ${this.language[0]}. ${this.name} has several neighbours, including ${this.neighbours[0]} and ${this.neighbours[2]}. ${this.capital} is ${this.name}'s capital city.`
}

console.log("method to describe malawi >", malawi.describe());

malawi.checkIsland = function() {
  this.isIsland = !this.neighbours ? true : false;

  return this.isIsland;
}

console.log("is malawi an island?", malawi.checkIsland());

console.log("malawi >", malawi);

console.log("👩‍💻 Iteration: The `for` Loop");
// 1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

function countVotes() {
  for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting 🇲🇼`);
  }
};

console.log("voter counts >", countVotes());

console.log("👩‍💻 Looping Arrays, Breaking and Continuing");
// ✅ 1. Let's bring back the 'populations' array from a previous assignment
// use the maritimeProvincePopulations array
// ✅ 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier
// previous array is maritimeProvincePercentages
// previous function is populationCalculator
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
const computedMaritimeProvincePercentages = [];

function computePopulationPercentage(array, newArray) {
  for (let i = 0; i <= array.length; i++) {
    console.log("array[i] >", array[i]);
    if (!array[i]) break;
    computedMaritimeProvincePercentages.push(populationCalculator(array[i]));
  };
};

computePopulationPercentage(maritimeProvincePopulations, computedMaritimeProvincePercentages);
console.log("computed maritime province percentages >", computedMaritimeProvincePercentages);

console.log("maritimeProvincePercentages >", maritimeProvincePercentages);

console.log("equality check >", computedMaritimeProvincePercentages === maritimeProvincePercentages);

// not sure why, but these are coming up as not strictly equal; the values and type appear the same in the log

console.log("👩‍💻 Looping Backwards and Loops in Loops");
// 1. Store this array of arrays into a variable called 'listOfNeighbours'

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// ✅ 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// ✅ 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

// log each neighbour individually to the console
function logNeighbours(array) {
  // set up the outer loop
  console.log("neighbouring countries 👇");

  for (let group = 0; group <= array.length; group++) {
    console.log(`Group ${group} >`);
    // console.log(`Group ${group} >`, array[group]);


    // set up the inner loop
    if (!array[group]) {
      console.log("nothing to see here 🙈");
      break;
    };

    // console.log("group length >", array[group].length);
    let length = array[group].length;
    // for (let neighbour = 0; neighbour <= group.length; neighbour++) {
      // }
      for (let rep = 0; rep <= length ; rep++) {
        // console.log("➿ inner loop ➿");
        // console.log("rep >", rep); // returns the index number
        // console.log("group[rep] >", group[rep]); // returns undefined
        let neighbour = array[group][rep];
        if (!neighbour) break;
        console.log("neighbour >", neighbour);
    };
  };
};

console.log("neighbours >", logNeighbours(listOfNeighbours));

console.log("👩‍💻 The while Loop");
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
// use the maritimeProvincePopulations array
// previous function is populationCalculator

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?

// * Use a while loop to compute an array called 'percentages3' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier

// function computePopulationPercentage(array, newArray) {
  //   for (let i = 0; i <= array.length; i++) {
    //     console.log("array[i] >", array[i]);
    //     if (!array[i]) break;
    //     computedMaritimeProvincePercentages.push(populationCalculator(array[i]));
    //   };
    // };
    
let percentages3 = [];
let percentage = undefined;
console.log("percentage >", percentage);

function calculatePercentageWithWhile(array) {
  let index = 0;
  while (index <= array.length) {
    // calculate percentage and push to array
    console.log(`index ${index}`);
    percentages3.push(populationCalculator(array[index]));
    index++;
    if (index === array.length) break;
  }
};

calculatePercentageWithWhile(maritimeProvincePopulations);

console.log("calculated array with a while loop >", percentages3);

// don't like the while loop as much;
// it's a little cleaner to read, but the way the condition is set up means you need to look to other places to discover what is happening in the whole picture
// it's not bad, just different
// i might like the for loop more because it's more familiar