# Project 2 : Modal window

## 79. Project 2 : Modal window
* modal element is already set in the HTML; starts with a `hidden` class
* using `.querySelector(".classname")` will only select the *first* element with that class
* to select multiple elements with the same class, use `.querySelectorAll()`, and can then utilize an iterator to assign individual selectors
* don't need curly braces for single command lines in `for` loops, `if / else` statements, arrow functions, etc

## 80. Working with classes

## 81. Handling an `esc` keypress event
* keypress events are global - they don't happen on a specific element
* `keypress` will fire continually as long as a key is pressed / held down
* `keyup` will fire when a key is lifted
* `keydown` will fire when a key is pressed down
* can pass an `event` through a function, and utilize the event object to access various elementes for manipulation; this generates a JavaScript object