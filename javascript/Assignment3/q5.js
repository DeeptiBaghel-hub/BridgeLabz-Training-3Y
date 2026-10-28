'use strict';

// Q5 - Hoisting Lab: The Sequence Trap
// This script shows how function declarations and var variables are hoisted.
// let variables are not hoisted in the same way; they exist in temporal dead zone until initialization.

console.log("Q5 - Hoisting Lab\n");

console.log("Original sequence:");
console.log(score); // hoisted var -> undefined
announce();
var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

console.log("\nFixed version:");
var fixedScore = 50;
function announceFixed() {
  console.log("Game started");
}
let fixedStatus = "ready";
function startGameFixed() {
  console.log(fixedStatus);
}

console.log(fixedScore);
announceFixed();
startGameFixed();

console.log("\nArrow function version:");
const announceArrow = () => console.log("Game started");
const startGameArrow = () => {
  const status = "ready";
  console.log(status);
};

announceArrow();
startGameArrow();

// Explanation:
// - var score is hoisted to the top and initialized as undefined.
// - function announce is hoisted as a full function object and can be called before declaration.
// - let status is hoisted to the block scope but remains in TDZ until initialized.
// - The fixed version declares variables before use so the program behaves predictably.
// - Arrow functions also have lexical scope, but they do not change the hoisting behavior of var.
