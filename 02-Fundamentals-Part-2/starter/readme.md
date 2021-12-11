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
