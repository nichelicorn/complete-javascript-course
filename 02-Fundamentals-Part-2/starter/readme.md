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

  