// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("👩‍💻 Section Five : Developer skills & editor setup");

console.log("👩‍💻 Prettier and VS Code");
const testVariable = "this code was formatted with Prettier 💄!";

console.log("live reload");
console.log("can be enabled by the Live Server VS Code extension");
console.log("or using Node.js and NPM package");

console.log("We will be using the package live-server");

console.log("👩‍💻 Using Google, StackOverflow, and MDN");
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: Given an array of temperatures one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

// DATA
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanding the problem
// What is amplitude? Answer - the difference between highest and lowest temp
// How is the max / min temperature computed?
// What's a sensor error?
// What does a sensor error look like? Answer - appears in the array as the string "error"
// What should we do when an error occurs? Answer - ignore and work with only the remaining data

// sub-problems
// How to ignore errors?
// ✅ Find max value in temp array
// ✅ Find min value in temp array
// Calculate amplitude (diff in min / max temps);

function calcTempAmplitude(array) {
  // find the max value in the array
  // inspo from SO post; scrolled until found a `for` loop answer (a tool we have already learned)
  // can use iteration to determine if the current value is greater than the max value, and if so, reassign max value to current value
  
  // set max / min as the first element of the array
  let max = array[0];
  let min = array[0];
  // loop over the array to determine if a value is greater than max
  // if i > max, reassign max to the value of i
  for (let i = 0; i < array.length; i++) {
    if (typeof i !== "number") continue;

    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
  };
  console.log("max / min >", max, "/", min);

  // find the min value in the array
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < min) min = array[i];
  // };

  // calc the amplitude
  let amplitude = max - min;

  // return the amplitude
  return amplitude;
};

calcTempAmplitude(temperatures);

const amplitude = calcTempAmplitude(temperatures);
console.log("amplitude >", amplitude);

// PROBLEM 2
// function should receive *two* arrays of temperatues

// understanding
// when we have two arrays, do we need to implement same functionality twice? Answer - no; need to merge the two arrays
// how to merge two arrays?

// sub-problems
// merge two arrays - can use a prototype method to merge two arrays; .push() to add elements to end of array, .concat() to create a new array containing values of original arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const temps = [7, 11, 13, 17, 29];

function calcAmplitudeTwoArrays(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  console.log("new array >", newArray);
  
  // let min = newArray[0];
  // let max = newArray[0];

  // for (let i = 0; i < newArray.length; i++) {
  //   if (typeof i !== "number") continue;
  //   if (newArray[i] < min) min = newArray[i];
  //   if (newArray[i] > max) max = newArray[i];
  // }

  // console.log("max / min >", max, "/", min);

  // let amplitude = max - min;
  // return amplitude;

  return calcTempAmplitude(newArray);
};

const ampli2de = calcAmplitudeTwoArrays(temperatures, temps);

console.log("ampli2de >", ampli2de);

// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
// console.log("👩‍💻 ");
