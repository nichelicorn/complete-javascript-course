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




# Course Material and FAQ for my Complete JavaScript Course

This repo contains starter files and final code for all sections and projects contained in the course.

Use starter code to start each section, and **final code to compare it with your own code whenever something doesn't work**!

👇 **_Please read the following Frequently Asked Questions (FAQ) carefully before starting the course_** 👇

## FAQ

### Q1: How do I download the files?

**A:** If you're new to GitHub and just want to download the entire code, hit the green button saying "Code", and then choose the "Download ZIP" option. If you can't see the button (on mobile), use [this link](https://github.com/jonasschmedtmann/complete-javascript-course/archive/master.zip) instead.

### Q2: I'm looking for the old course version (v1) files. Where can I find them?

**A:** They are in this same repo, but in the [v1 branch](https://github.com/jonasschmedtmann/complete-javascript-course/tree/v1). So just go to [v1](https://github.com/jonasschmedtmann/complete-javascript-course/tree/v1), and download the code from there.

### Q3: I'm stuck! Where do I get help?

**A:** Have you actually tried to fix the problem on your own? Have you compared your code to the final code? If you failed fixing your problem, please **post a detailed description of the problem to the Q&A area of that video over at Udemy**, along with a [codepen](https://codepen.io/pen/) containing your code. You will get help there. Please don't send me a personal message or email to fix coding problems.

### Q4: What VSCode theme are you using?

**A:** I use Monokai Pro for all my coding and course production. It's a paid theme (I', **not** affiliated with them), but you can actually use the free demo version forever 😅

### Q5: Can I see a final version of the course projects?

**A:** Sure! Here you go:

- [Pig Game](https://pig-game-v2.netlify.app) (DOM Manipulation)
- [Bankist](https://bankist.netlify.app/) (Arrays, Numbers, Dates, Timers. Fake "log in" with user `js` and PIN `1111`)
- [Bankist Site](https://bankist-dom.netlify.app/) (Advanced DOM and Events)
- [Mapty](https://mapty.netlify.app/) (OOP, Geolocation, Project planning)
- [forkify](https://forkify-v2.netlify.app/) (Final advanced project)

### Q6: Videos don't load, can you fix it?

**A:** Unfortunately, there is nothing I can do about it. The course is hosted on Udemy, and sometimes they have technical issues like this. Please just come back a bit later or [contact their support team](https://support.udemy.com/hc/en-us).

### Q7: Videos are blurred / have low quality, can you fix it?

**A:** Please open video settings and change the quality from 'Auto' to another value, for example 720p. If that doesn't help, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q8: Are the videos downloadable?

**A:** Yes! I made all videos downloadable from Udemy so you can learn even without an internet connection. To download a video, use the settings icon in the right bottom corner of the video player. Videos have to be downloaded individually.

### Q9: I want to put these projects in my portfolio. Is that allowed?

**A:** Absolutely! Just make sure you actually built them yourself by following the course, and that you understand what you did. What is **not allowed** is that you create your own course/videos/articles based on this course's content!

### Q10: You mentioned your resources page. Where can I find it?

**A:** It's on my website at <http://codingheroes.io/resources>. You can subscribe for updates 😉

### Q11: I love your courses and want to get updates on new courses. How?

**A:** First, you can subscribe to my email list [at my website](http://codingheroes.io/resources). Plus, I make important announcements on twitter [@jonasschmedtman](https://twitter.com/jonasschmedtman), so you should definitely follow me there 🔥

### Q12: How do I get my certificate of completion?

**A:** A certificate of completion is provided by Udemy after you complete 100% of the course. After completing the course, just click on the "Your progress" indicator in the top right-hand corner of the course page. If you want to change your name on the certificate, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q13: Can you add subtitles in my language?

**A:** No. I provide professional English captions, but Udemy is responsible for subtitles in all other languages (automatic translations). So please [contact the Udemy support team](https://support.udemy.com/hc/en-us) to request your own language.

### Q14: Do you accept pull requests?

**A:** No, for the simple reason that I want this repository to contain the _exact_ same code that is shown in the videos. However, please feel free to add an issue if you found one.
