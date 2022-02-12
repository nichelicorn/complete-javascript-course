# Section 5 : Developer skills & editor setup

## Section Intro
* learn how to learn to code, how to think like a dev, how to debug code, and how to set up a professional development environment

## 54. Section Roadmap
* complete all sections

## 55. Setting up Prettier and VS Code
* Prettier is an opinionated code formatter (it makes decisions about how code should look, and formats everything according to these rules)
  * available as a VS Code extension
  * define prettier as the default formatter & enable format on save
  * [Prettier docs](https://prettier.io/docs/en/index.html)
  * configuration can be customized by creating a .prettierrc file
  * [Ignoring files](https://prettier.io/docs/en/ignore.html#markdown)
* In VS Code, can configure user snippets, that will allow you to automate common operations / create global snippets to insert into your code
  * ex. replace console.log(``) with a snippet!
  * Code > Prefererences > User snippets
  * ⚠️ this isn't working for me (set up log as a console log keyword, but it's not populating the snippet)

## 56. Installing Node.js and Setting up a dev environment
* set up Live Server to reload browser with each update (no more manual reloads!)

## 57. Learning how to code
* How to fail at learning how to code
  * don't have a clear goal at the beginning of learning journey
  * during tutorials, just copy and paste code; don't learn how it works
  * don't reinforce learning by doing challenges / taking notes
  * don't practice!
  * make sure to become easily frustrated
  * lose motivation because you believe it's not possible to learn everything
  * learn in isolation

* How to avoid failure
  * set a specific, measurable, realistic, and time\*based goal
  * know exactly why you are learning to code (are you trying to switch careers? better job? hobby?) \* know why you are doing this!!
  * Imagine a big project you want to be able to build at the end of your learning journey!
  * Research the technologies you will need to accomplish the big goal
  * Ensure you always understand the code you are studying and typing
  * DON'T copy / paste code! Always type it out, and make sure you understand how it all works together
  * After learning a new concept or feature, use it immediately!
  * Take notes
  * Challenge yourself and practice with coding exercises and challenges
  * make up your own coding challenges based on tasks you do often or things you want to include in the big idea
  * don't be in a hurry to complete a course!
  * check out coding challenges like codewars
  * practice often on your own!
  * this is not optional! without writing your own project ideas, you won't be able to understand how the web or development works
  * grow by overcoming obstacles!
  * come up with your own project ideas or copy popular applications / sites / pieces of popular sites
  * don't get stuck in tutorial hell!
  * don't get stuck by trying to write "perfect" code \* this doesn't matter, so just write a lot of code!
  * quality will improve over time with practice
  * embrace that you simply will _never_ know everything about web development
  * clean / efficient code will come with time
  * code can always be refactored later
  * just focus on what you need to achieve your goal
  * don't compare yourself to other developers (you're a beginner, and no one is born an expert!)
  * remember, you will always be learning, all the time, as a developer
  * learn with other people whenever possible
  * explain things to other people to help make concepts stick (the best way to learn is to teach)
  * share goals / progress publicly if that is motivational for you (ex #CodeNewbie, #webdev)
  * courses are just the start of the journey to becoming a professional web developer
* When you encounter bugs, don't lose confidence! Consider it a challenge, and use it as an opportunity to learn something about development and how to work through problems / bugs
* Keep challenging yourself, building bigger projects, and keep fixing problems
* Remember that learning to code is difficult! It's okay to get stuck, and remember that getting through it will help you grow
* Even when you're working, you'll never stop learning! Be flexible and learn to adapt to new technologies / workflows

## 58. How to think like a developer : Become a problem solver!
* Solve problems using a simple, four-step process
* Solving problems isn't just knowing how to accomplish technical tasks, but rather how to create solutions to unique problems / issues / bugs
* Try not to waste time on ego / frustration / lack of structure 
* Stay calm and slow down - don't jump at the problem without a plan
* Take a logical / rational approach
* Four steps to solve a problem:
  * Ensure you understand the problem, 100% - *Ask the right questions* to get a clear picture of the problem; clarify language used in the problem; what kind of data types will be involved in the problem / solution?; what should happen if an incorrect data type is passed through?; what should the function return?; how do we recognize the original data type?; what can actually be done to a particular data type?
  * Divide and conquer - *Break a big problem into smaller sub-problems, as many as you can!*; take the big problem apart until you fully understand it (helpful for step 1); verify the data type being worked with; implement techniques for accomplishing the task with different data types; return the desired value; sub-problems might end up looking like a task list ✅
  * *Do research!* - discover as much as you need to solve any of the sub-problems; this is a huge part of programming; don't be ashamed when you don't know enough to solve a particular problem; search the specific problem
  * For bigger problems, think it out! - *Write `pseudocode` to work through the sub-problems and help you get to a solution!*; write it so that you / your team can understand the steps to breaking down the problem; use simple language to describe each step and its desired outcome
  * Develop a curiosity for how things work; dig into that curiosity to inspire your understanding of systems and how they work together

## 59. Using Google, StackOverflow, and MDN

## 60. Debugging (fixing errors)
* A software bug is a defect or problem in software; any unexpected or unintended behavior
* Steps to discovering / fixing bugs:
  * Identify: during development; testing software; user reports during production; context: brow sers, users, etc. (certain behaviors may not occur in all environments)
  * Find in the code: use developer console; debugger software
  * Fix it!: Replace the bad code with a correct solution
  * Prevent: Search project for a similar bug; write tests!