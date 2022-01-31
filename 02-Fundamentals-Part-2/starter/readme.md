# Complete JavaScript - Section 3: JavaScript Fundamentals Part 2

## Activating Strict Mode
* Secure mode can be activated
* A special mode that makes it easier to write secure JavaScript code
* To activate, add the string "use strict"; at the beginning of the script
  * If using, must be the first line of any script
  * Can also be activated only for a specific function or block
* Makes it easier to avoid accidental errors
  * Forbids certain actions
  * Creates visible errors in certain situations
* I'm curious if TypeScript has any similarity to using Strict Mode
* Also introduces a list of variables names that are reserved for future use
* The remainder of the course assumes that Strict Mode is being utilized

## Functions
* A piece of code that can be reused over and over again in a script
  * Can hold one or more complete lines of code
  * Curly braces `{}` hold the function body
* Functions often take in data, and can also return data back to the script
  * Think of functions as machines for the code
  * Food processor analogy (food processor = function body)
* Parameters are defined when a function is invoked (arguments passed through to the function);
* Set function invocations to a variable to utilize their returned values in the script
* Keeps code DRY

## Function Declarations vs. Expressions
* Function declarations utilize the `function` keyword
* Function expressions are set up like a variable, and assign the function declaration to its value
* 🪄 In JavaScript, functions are values, which means they can be stored in variables
* The main practical difference is that function declarations can be called *before* they are defined in the code
* Using declarations vs. expressions is usually down to personal preference
  * Know about both! They each have their place / use in JavaScript

## Arrow Functions
* An arrow function is a shorter, more concise syntax
* Remember to include the `return` statement when writing multi-line functions / arrow functions
* Arrow functions are easier to write, but they aren't the best tool for every scenario
  * The `this` keyword DOES NOT APPLY to arrow functions - if `this` binding is required, use a fxn expression / declaration
  * Best case for use is one-liner functions

## Functions Calling Other Functions
* Write small functions that do simple tasks
* These functions can be invoked anywhere within the codebase, creating DRYness in the code, and avoiding repetition
* Keeping functionality discrete avoids future debugging issues when a value / expression needs updating

## Reviewing Functions
* Function declarations use the `function` keyword and can be used in code before it is declared (if it appears lower down the script)
* Function expressions are essentially a function *value* stored in a variable; they are declared using the `const` variable keyword and are then assigned as the value of the variable
* Arrow functions are a shortened syntax; these are great for one-line functions; has no `this` keyword
* These various methods of building functions all operating by receiving, transforming, and outputing data
* Functions will have: a name (usually); parameters (placeholders to receive input values; when invoked, these values will be presented as arguments); function body (block of code to be executed; processes the function's input data); a `return` statement (contains the output value from the function and terminates execution)
* A function is invoked / called / executed using the function name and a pair of parentheses containing any arguments needed to pass through to the function's parameters
* Storing a function invocation in a variable stores the results of invoking a function for reuse

## Introduction to Arrays
* Arrays are zero-based; items in the array are indexed beginning with zero; the first element in an array can be called by referencing array[0]
* Reminder: an expression is code that produces a value
* use `array.length` to get the number of elements in an array
* Only primitive values are bound by the immutability of `const` vs. `let`
* Array values can be mutated; however, the entire array cannot be redeclared when declared as a `cosnt`
* When working with array values, iterator methods can be used to perform the same operation on each value within the array

## Basic Array Operations (Methods)
* JS has some built-in methods that are specifically designed to use with arrays
* `.push(element)` adds an element to the end of an array
  * this method accepts an argument - the element to be added to the array
  * mutates the original array
  * returns the length of the new array; setting this method to a variable will return a number

* `.unshift(element)` adds an element to the beginning of an array
  * accepts an argument - the element to be added to the array
  * mutates the original array
  * returns the updated length of the array

* `.pop()` will remove the last element from the array
  * does not require an argument; will automatically remove the last element in the array
  * returns the element that was removed from the array

* `.shift()` will remove the first element from the array
  * does not require an argument; will automatically remove the first element in the array
  * returns the element that was removed from the array

* `.indexOf(element)` returns the index number of a known element
  * accepts an argument - the element to be found
  * if an unknown element is passed to the method, it will return -1

* `.includes(element)` will search an array for an element and return a boolean
  * accepts one argument, an element to be searched for within an array
  * tests with strict equality

## Coding Challenge #2
* Complex data types can be reassigned when using certain prototype methods

## 42. Introduction to Objects
* Arrays are data structures which combine multiple values that all belong to a single entity; arrays do not have named elements - they can be referenced only by index
* Objects are complex data structures with defined key: value pairs
  * new objects are defined using curly brackets `{}` rather than square brackets
  * object literal syntax, defining an object using curly braces, is the easiest way to create a new object
  * used to group values that belong together
  * the order of values *does not matter* because they will be accessed using the key, rather than an index as in an array

## 43. Dot vs. Bracket Notation
* The order of properties does not matter; the property name (key) is used to access these values
* dot notation - searches the object when a key name is used, ex. `ahsoka.lastName` will look for the key `lastName` inside the `ahsoka` object
* bracket notation - searches the object when a key name is used, ex. `ahsoka["lastName"]` will look for the key `lastName` inside the `ahsoka` object; use a string inside the brackets to indicate the key / property name
  * brackets allow use of expressions to discover values if the key name is unknown
  * see example on line 224 of the scripts file
* using an unknown key will returned an `undefined` value
* brackets and dots are operators
* in MDN docs, dots are referred to as `member access`, and brackets are referred to as `computed member access`
  * order of precedence shows arrays and dots are both completed left to right in order received 

## 44. Object Methods
* can create a key value pair in which the value is a function
* In every method, JS provides access to a special variable, called `this`; can now use values directly from the object itself without having to use parameters in object methods
* JS methods (functions set on objects) can use the special keyword `this`, which will refer all references contained in that object to that object's values containing the keyword
* using `this` keeps code DRY by preventing the repeating of object names inside the code; if the object name ever changes, won't have to change multiple references to the object name in the code