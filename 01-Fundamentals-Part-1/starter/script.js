// Lesson 2.9
let js = "amazing";

console.log('My name is Computatron');
console.log(typeof 'My name is Computatron');

// Lesson 2.10
let firstName = "Nichele";
console.log("variable firstName <>>>", firstName);
firstName = "Jim";
console.log("variable firstName <>>>", firstName);
firstName = "Sarah";
console.log("variable firstName <>>>", firstName);

let PI = 3.1415;

// these variable names provide context and detail about what kind of values are being stored; `myFirstJob` indicates that this job is associated with the `firstName` declared above
let myFirstJob = "greeter";
let myCurrentJob = "coding student";

// these variable names are just two different jobs; they don't provide context in relation to other variables; they may or may not be related to the `firstName`
let job1 = "greeter";
let job2 = "coding student";

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