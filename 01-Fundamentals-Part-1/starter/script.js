console.log("lesson exercises 👩‍💻")

// Lesson 2.9
const js = "amazing";

console.log('My name is Computatron');
console.log(typeof 'My name is Computatron');

// Lesson 2.10
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

// Lesson 2.12
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

// 2.13 let, const, and var
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

// 2.14 Basic Operators
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
let x = 10 + 5; // addition
x += 10; // add to the existing value
x *= 4; // multiply by the existing value
x++; // add one to existing value
x--; // subtract one from the existing value
x--;
console.log("value of x <>>>", x);

// comparison operators
console.log("Is Nichele's age > than Jim's age?", ageNichele > ageJim);

console.log("Is Jim of age?", ageJim >= 18);

