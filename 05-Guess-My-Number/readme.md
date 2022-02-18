# JavaScript in the browser: DOM and event fundamentals

## 68. Section Intro
* This section will cover the basics of DOM manipulation

## 69. Section Roadmap

## 70. Project #1: Guess my number!
* The first of three projects in this section!
* first project - Guess My Number!
  * the goal of the game is to guess the secret number between 1 - 20
  * user will input a number, then click a box, then receive a message about their guess
  * each guess decreases the score by one point
  * several elements will update when the user guesses the correct number; high score will remain in place as the user moves on to another game
* Interface is already set up in HTML
* can use `document.querySelector("selector")` to "grab" HTML elements and update / manipulate them

## 71. What's the DOM and DOM manipulation
* `DOM` - Document Object Model, a structured representation of HTML documents; allows JS to access HTML elements and styles to manipulate them; ex, using JS to change CSS styles or HTML elements / attributes; a complete representation of the HTML document
* automatically created by the browser when a page loads
* stored in a "tree" structure
  * starts with `document` at the top of the tree - grants access to the entire DOM tree; the entry point to the DOM
  * the first child element is *usually* the `<html>` element; this contains additional child elements (who are sibling elements to each other)
  * additional child elements will be contained within additional elements, and these relationships can all be seen in the DOM tree
* DOM !== JavaScript
  * the DOM is a WebAPI, a library that can be accessed by JavaScript
  * WebAPIs are libraries that are automatically available for use on the web (they don't require any additional imports / setups to use); the reason the DOM is the same in all browsers

## 72. Selecting and manipulating elements

## 73. Handling click events

## 74. Implementing the game logic

## 75. Manipulating CSS styles

## 76. Coding challenge #1

## 77. Implementing highscores

## 78. Refactoring our code: the DRY principle

## 79. Project #2: Modal window

## 80. Working with classes

## 81. Handling an `esc` keypress eveng

## 82. Project #3: Pig game

## 83. Rolling the dice

## 84. Switching the active player

## 85. Holding current score

## 86. Resetting the game