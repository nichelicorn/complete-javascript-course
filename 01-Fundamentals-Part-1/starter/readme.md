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

### Lesson 2.15 Operator Precedence
* JS has a well-defined order of operations, or a specific order in which operations are executed
* MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* "Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence."
* there is a numerical ordering of operations, and JS knows to follow this order when completing JS which utilizes operators
* good to have a general idea of which operators are completed first (ex: math operators are completed prior to comparison operators)
* most operations are completed left -> right (mathematical operators), though some operations will be completed right -> left (assignment operator)
* grouping using `()` takes the highest precedence

### Lesson 2.17 Strings and Template literals
* can use `` to write *any* regular string in JavaScript!; makes it easier to insert JS expressions into strings where needed (don't have to think about which type of string representation you're working with)

### Lesson 2.18 Taking Decisions : if/else statements
* can use `if / else` statements to determine the path code should take
* if a condition is true, execute a certain line of code; if the condition is false, another line of code can be executed, or nothing will happen

### Lesson 2.20 Type conversion and coercion
* type conversion is when we explicitly want to change a data type from one to another

* type coercion happens whenever an operator is dealing with two values of differing data types
* JS will convert one value to match the data type of the other value

* the - operator will convert strings to numbers *not* numbers to strings
* this behavior (numbers to strings) occurs with +, /, <> operators 

### Lesson 2.21 Truthy and Falsy values
* values that will be converted to `true` when converting to a Boolean (anything except the falsy values below)

* falsy values are values that are not exactly false, but will become false when coverted to a Boolean
* there are only *five* `falsy` values:
  - zero
  - an empty string
  - `undefined`
  - `null`
  - `NaN`

* JS will do type coercion to Booleans when using logical operators, or in a logical context, like an if/else statement

### Lesson 2.22 Equality Operators
* Strict equality operator `===` does *not* perform type coercion
  * If necessary, best practice to convert type *before* performing equality operations
* Loose equality operator `==` does perform type coercion, but this can lead to undesirable behaviors later on in the script
* Updated numNeighbors to set the value using the `Number()` function, converting the returned value to a number
  * [Number on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* Using the strict equality operator ensures operations are only performed on like data types; type coercion will occasionally allow code to function as expected, but incorrect data types may cause issues down the line which are unaccounted for in the codebase.
  * [Strict equality `===` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

### Lesson 2.23 Boolean Logic
* A branch of computer science that uses true / false value to solve complex problems
* Uses logical operators to combine logical operators
* `and`, `or`, and `not` operators
* Boolean variables are either true / truthy or false / falsy
* `and` operator returns true only if all conditions are true; can have two or more variables in `and` operations
* `or` operator works almost in the opposite way - returns true if any one of the conditions is true
* `not` operator does not combine multiple variables, and works on only one variable and inverts it; if a is true, it will become false, and anything false will become true

### Lesson 2.24 Logical Operators


### Lesson 2.26 The Switch statement
* Use this when you want to compare one value to multiple different outcomes / options
* Works similar to an `if / else` statement
* May be declining in use
* [`switch` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
  * The `switch` statement evaluates an expression, matching the expression's value to a `case` clause, and executes statements associated with that case, as well as statements in `cases` that follow the matching `case`
  * Uses the strict comparison `===` to match the `expression` criteria with the `case`
  * A `default` clause can be provided in the event that none of the specified cases are met by the `expression` criteria
  * Requires a `break` statement at the end of each clause; if the `break` is omitted, the program continues executing the next statement in the `switch`, until a `break` is found or the end is reached; *not* required if preceded by a `return` statement
  * Multiple `cases` can be defined to execute the same statements; this is done by separating the `cases` using a colon `:`
  * Multi-`case` chained operations are also possible, adding / updating the expression value until a `break` is reached or a `default` is executed
  * Wrap clauses with curly brackets `{}` if using variable redeclarations from within the `switch` statement

### Lesson 2.27 Statements and Expressions
* An expression is a piece of code that produces a value (ex, 3 + 4 is an expression, and produces a value, 7; 17 on its own is also an expression, as are Boolean values or other number)
* A declaration is like a complete sentence, and expressions are the words that make up the declarations/statements
* [Statements and declarations on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
  * Statements include things like control flow statements (`if ... else`, `switch`, `break`, etc), declarations (`var`, `let`, and `const`), functions and classes (`function`, `return`, `class`, etc), iterations (`for` loops, `while`, etc), and others (`debugger`, `import`, `export`, etc);
  * There are some browser compatibility issues with statements / declarations, mainly Internet Explorer

### Lesson 2.28 The Conditional (Ternary) Operator
* "This one is actually *really* nice." - Jonas
* Only one thing can be done if a condition is true (use an `if ... else` when you have multiple things to do in a statement)
* Has three parts (hence the name, ternary), the condition, the `if` part, and the `else` part
* An operator always produces a value (it's an expression); it can be assigned to a variable
* Can be used in an interpolation, *unlike* an `if ... else` statement

### Lesson 2.30 JavaScript Releases
* The history of JavaScript 📖
  * First version created in 1995 in 10 days; was initially named Mocha, renamed to LiveScript in 1996, and then to JavaScript to attract Java developers
  * Internet Explorer launched in 1996 as well, but called their copied Netscape JavaScript JScript
  * ECMA released ES1 in 1997, the very first official standard for the JavaScript language; this means that all browsers use the same version of the language in implementation
  * New features released in 2009 after much debate (ES5)
  * June 2015 saw the launch of ES2015 / ES6, containing many new and exciting features! Still a big deal in the JS world; new releases now occur annually

* JavaScript includes backward compatibility! This means you can't break the web using old JS code - it will work just the same
  * Old features are *never* removed
  * New versions are incremental updates on top of previous versions (releases)
  * Websites will never stop working!
  * Ignore most of the weird, old stuff, and focus on new features instead! There's a lot of cool stuff now 😎

* During development, use the most recent version of your browser (Firefox / Chrome)
* During production, transpiling / polyfilling allows any new code to be interpreted on older browsers / devices
  * ES5 is fully supported on all browsers, back to 2011
  * Newer releases are well supported in modern browsers, but lack support for older browsers; most of these features can be put into production using transpiling / polyfilling
  * ESNext (future releases) are often implemented before they enter official ECMAScript documentation; may  not be available in all browsers