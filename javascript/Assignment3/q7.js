'use strict';

// Q7 - Smart Calculator
// A switch statement handles different operations.
// Custom errors make divide-by-zero and invalid root cases explicit.

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Invalid operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

class DivisionByZeroError extends Error {
  constructor() {
    super("Cannot divide by zero.");
    this.name = "DivisionByZeroError";
  }
}

class NegativeRootError extends Error {
  constructor() {
    super("Cannot calculate root of a negative number.");
    this.name = "NegativeRootError";
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

console.log("Q7 - Smart Calculator\n");

for (const operation of operations) {
  try {
    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "divide":
        if (num2 === 0) {
          throw new DivisionByZeroError();
        }
        result = num1 / num2;
        break;
      case "power":
        result = Math.pow(num1, num2);
        break;
      case "root":
        if (num1 < 0) {
          throw new NegativeRootError();
        }
        result = Math.sqrt(num1);
        break;
      case "subtract":
        result = num1 - num2;
        break;
      default:
        throw new InvalidOperationError(operation);
    }

    console.log(`Operation: ${operation} | Result: ${result}`);
  } catch (error) {
    console.log(`Error for ${operation}: ${error.name} - ${error.message}`);
  }
}

console.log("\nFormatted summary:");
for (const operation of operations) {
  try {
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "divide":
        if (num2 === 0) throw new DivisionByZeroError();
        result = num1 / num2;
        break;
      case "power":
        result = Math.pow(num1, num2);
        break;
      case "root":
        if (num1 < 0) throw new NegativeRootError();
        result = Math.sqrt(num1);
        break;
      case "subtract":
        result = num1 - num2;
        break;
      default:
        throw new InvalidOperationError(operation);
    }

    console.log(`${operation.toUpperCase()}: ${result}`);
  } catch (error) {
    console.log(`${operation.toUpperCase()}: ERROR => ${error.name}: ${error.message}`);
  }
}
