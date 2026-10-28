'use strict';

// Q10 - Nested Hoisting and Closures
// This example shows that a function declaration is hoisted to its own scope,
// and a var declaration inside a nested function creates a separate local binding.

console.log("Q10 - Nested Hoisting and Closures\n");

function outer() {
  console.log(count); // outer count is hoisted and initialized as undefined
  var count = 5;

  function inner() {
    console.log(count); // inner count is also hoisted within the inner scope
    var count = 10;
  }

  inner();
}

outer();

console.log("\nArrow version:");
function outerArrow() {
  var count = 5;
  const inner = () => {
    console.log(count); // closure reads outer variable value
    var count = 10;
  };

  inner();
}

outerArrow();

// Explanation:
// - var declarations are hoisted to the top of their function scope.
// - The inner function has its own local count variable, so the console.log inside inner sees undefined before assignment.
// - The arrow function changes lexical this behavior, but the hoisting rule of var still creates an inner-local binding.
// - Using debugger; here lets you inspect the call stack and memory state for outer -> inner.
