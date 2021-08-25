# Notes

### Lesson 2.8 : A Brief Introduction to JavaScript

* What is JavaScript?
  * A high-level (don't have to think about the complex management of the program, operates in / using abstractions), object-oriented (mostly based on the concepts of objects for storing most kinds of data), multi-paradign (flexible and versatile, allows devs to use multiple styles of programming to achieve results) programming language (a tool that instructs a computer to do something)
  * builds dynamic effects and web applications in a browser
  * can be build using frameworks and libraries for simplicity and speed (these are built using JavaScript!)
  * nodeJS builds backend web applications for interaction with databases
  * can also use JS for building native mobile and desktop applications

* What is JavaScript used for?
  * JavaScript (functionality, how things happen, interactivity and dynamic effects, can also manipulate HTML and CSS) works with HTML (content) and CSS (style and presentation, layout) to create web applications
  * If web applications were paragraphs: 
    * HTML represents the nouns
    * CSS represent the adjectives
    * JavaScript represents the verbs 

### Lesson 2.10  : Values and Variables
* value - a piece of data; the most fundamental unit of information in programming; a single string is a value

* variable - a way to store values
  * declaring a variable will store a variable's value in memory; variables allow us to store values for future use
  * variables names should be stated in camelCase (JS uses camelCase for naming)
  * variable can be called / invoked by writing the variable name where its associated value is needed in JS operations
  * there are rules about variable naming! cannot start with numbers; no spaces; no capital letters (these are reserved for Class names / OOP); no reserved JS keywords (`this`, `function`, etc...); etc
  * can use a `$` to begin a name
  * `name` is a JS keyword! a strange JS behavior will allow you to use this as a variable name, but this is bad practice! 🙅‍♀️
* a few mathematical constants are hard-coded into JS, like Pi (3.1415...), written as `let PI = 3.1415...`
* ensure variable names are descriptive; the name should let devs know what kind of value the variable is holding

### Lesson 2.12 : Data Types
* in JS, every value is either an object or a primitive value

* 7 primitive data types; these include number, string, boolean, undefined, null, symbol, BigInt
  * `number` : floating point numbers; always have decimals, even if they aren't seen or defined; used for both decimals and integers
  * `string` : a sequence of characters, wrapped by quotes
  * `boolean` : a logical value type; can only be `true` or `false`; used for decision making and conditionals
  * `undefined` : the value taken by a variable that is not yet defined; an empty value; can be returned as a value and a type
  * `null` : also an empty value; from MDN: 
    ```
      typeof null

// This stands since the beginning of JavaScript
typeof null === 'object';

In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the typeof return value "object". (reference)

A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.
    ```
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  * `symbol` : value that is unique and cannot be changed; introduced with ES2015
  * `BigInt` : larger integers than the `number` type can hold; introduced with ES2020

* JS features dynamic typing - this means that when a variable is declared, you *do not* need to manually indicate the data type; instead, data types are determined automatically by JS
  * JS determines the type when storing variable values
  * distinction btwn value and variable is important!
  * in JS value have types, not the variables! this means that variable data types can be reassigned and gives greater flexibility to JS

  * commenting code in JS is useful to notate certain parts of the script, OR to prevent statements from being executed in the browser
    * `// notes` to create a single line comment
    * `/* notes ... notes */` will create multi-line comments 

### Lesson 2.13 `let`, `const`, and `var`
* `let` and `const` were both introduced with ES6
* `var` is the 'old way' of declaring variables
* the `let` keyword is used for variables whose values can be reassigned later, or when an empty variable is declared; block-scoped
* use `const` for variables whose values should not be changed; their values are not necessarily immutable, but they *can not* be reassigned; cannot leave `const` declarations `undefined` or `null`; creates a read-only reference to its associated value
* best practice (in Jonas' opinion) for clean code is using `const` by default and changing variable declarations `let` once you know the value will need to be mutable; changing variables present the opportunity for bugs to develop
* `var` should be avoided; good to know - still used in older codebases or tutorials; the old way of defining variables; works similar to `let`, allowing reassignment; function-scoped
* declaring variables isn't strictly necessary in JS; this is a terrible idea! it creates an object on the global window

### Lesson 2.14 Basic Operators
* operators allow us to transform values or combine multiple values; we can do all kinds of work with operstors!
* mathematical operators, logical, assignment, etc!; there are many types of operators
* mathematical : `+ - * /`
* can use the `+` operator to concatenate strings; need to include an additional `+ " " +` to add a space between words / characters in different strings
* `**` is the exponentiation operator; `7 ** 3` means 7^3, or 7 * 7 * 7
* `typeof` operator will output the type of value being evaluated
* `=` is the assignment operator
* `+=` will add the following value to the exisitng value of a variable
* comparison operators are used to create Boolean values