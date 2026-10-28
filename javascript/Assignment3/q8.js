'use strict';

// Q8 - Strict Mode Showdown
// This example highlights the difference between sloppy mode and strict mode.
// Duplicate parameters and deleting undeclared identifiers are illegal in strict mode.

console.log("Q8 - Strict Mode Showdown\n");

console.log("Without strict mode:");
function demoLoose(a, a) {
  total = 10;
  delete total;
  console.log("Loose mode executed successfully. total is now:", total);
}

try {
  demoLoose(5, 10);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

console.log("\nWith strict mode:");
try {
  function demoStrict(a, a) {
    'use strict';
    total = 10;
    delete total;
  }

  demoStrict(5, 10);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

console.log("\nCorrect ES6 version:");
function demoFixed(a, b) {
  'use strict';
  const total = a + b;
  console.log(`Total = ${total}`);
}

demoFixed(5, 10);

// Explanation:
// - Duplicate parameters are allowed in sloppy mode but forbidden in strict mode.
// - Assigning to an undeclared variable creates a global property in sloppy mode, but throws in strict mode.
// - delete on a variable or undeclared identifier is illegal in strict mode because it disrupts scope and object semantics.
