'use strict';

// Q4 - Debugging Mystery
// In strict mode, assigning to an undeclared variable is illegal.
// This throws a ReferenceError immediately, which helps catch sloppy programming bugs.

console.log("Q4 - Debugging Mystery\n");

function showMessageBad() {
  greeting = "Welcome"; // undeclared variable -> ReferenceError in strict mode
  console.log(greeting);
}

try {
  showMessageBad();
} catch (error) {
  console.log("Error caught:");
  console.log(`${error.name}: ${error.message}`);
}

// Fixed version: declare the variable in the correct scope.
function showMessageGood() {
  const greeting = "Welcome";
  console.log(greeting);
  debugger; // Watch 'greeting' in the VS Code debugger and inspect the call stack.
}

console.log("\nFixed version:");
showMessageGood();

// Explanation:
// In non-strict mode, JavaScript silently creates a global variable if a value is assigned to an undeclared identifier.
// In strict mode, that behavior is prohibited, so a ReferenceError is thrown.
// Declaring variables with let, const, or var makes scope explicit and prevents accidental leakage into the global object.
