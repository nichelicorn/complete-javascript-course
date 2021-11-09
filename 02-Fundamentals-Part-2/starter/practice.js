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
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");