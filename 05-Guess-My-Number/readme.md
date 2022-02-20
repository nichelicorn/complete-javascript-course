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
* select elements and display updated values in the DOM

## 73. Handling click events
* make the application do something!
* an event is something that happens on the page, like a mouse being clicked, a mouse being moved, a keypress, etc
* can "listen" for an event, and specify which action to take when the action occurs
* event handlers allow a function to be defined, but will not be invoked until the event occurs

## 74. Implementing the game logic
* determine what should happen / when
* Reminder! updates made to the DOM are *not* part of the application state
  * if state needs to be updated, think about how data is passing through the DOM

## 75. Manipulating CSS styles
* can use JS to update CSS styles too! this is included in the DOM
* use camelCase notation when updating CSS with JavaScript (doesn't recognize kebab case naming
* always use a string to specify the updated styling values

## 76. Coding challenge #1
* implement button click to start the game again
- [x] added button functionality

## 77. Implementing highscores
- [x] added incremental high score functionality

## 78. Refactoring our code: the DRY principle

## Resources
* [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) on MDN
  * If the node is a CDATA section, a comment, a processing instruction, or a text node, `textContent` returns the text inside the node; it sets the text as the markdown on the DOM
  * For other node types, returns a concatenation of the `textContent` of every child node, or an empty string
  * returns the content of all elements in the node an
  * using `.innerText` triggers a reflow (when a browser must process and draw part or all of a webpage again), which can be computationally expensive and should be avoided when possible