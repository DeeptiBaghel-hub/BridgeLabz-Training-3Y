'use strict';

// Q6 - Pyramid Pattern Generator
// The pattern logic is built using nested loops.
// We also compare let and var behavior and show how user input controls the outer loop limit.

console.log("Q6 - Pyramid Pattern Generator\n");

function generatePyramid(rows = 5) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

console.log("Pattern using let:");
generatePyramid(4);

console.log("\nPattern using var:");
function generatePyramidWithVar(rows = 5) {
  for (var i = 1; i <= rows; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

generatePyramidWithVar(4);

// Debug step-by-step: the loop counters are reused, but each iteration creates a fresh value for the block-scoped let variables.
// With var, the same function scope is reused, but the final output remains the same in this simple case.

const defaultRows = 5;
const userRows = Number(process.argv[2]) || defaultRows;
console.log(`\nUser-controlled pattern (default = ${defaultRows}): rows = ${userRows}`);

debugger; // Watch i, j, and line while stepping through the nested loop.

generatePyramid(userRows);
