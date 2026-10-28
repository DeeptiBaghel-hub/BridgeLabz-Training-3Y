'use strict';

// Q3 - Transaction Validator
// Custom errors are used to separate invalid entries from valid ones.
// debugger; is used as a breakpoint in VS Code to inspect variable values while running.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {
  constructor(type, message) {
    super(message);
    this.name = type;
  }
}

const validTransactions = [];
const invalidTransactions = [];

console.log("Q3 - Transaction Validator\n");

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index];

  debugger;

  try {
    if (transaction === null) {
      throw new TransactionError("NullEntryError", `Transaction at index ${index} is null.`);
    }

    if (!transaction.id || transaction.id === undefined) {
      throw new TransactionError("MissingFieldError", `Transaction at index ${index} is missing id.`);
    }

    if (transaction.amount === undefined) {
      throw new TransactionError("MissingFieldError", `Transaction at index ${index} is missing amount.`);
    }

    if (transaction.amount < 0) {
      throw new TransactionError("NegativeAmountError", `Transaction at index ${index} has a negative amount: ${transaction.amount}`);
    }

    validTransactions.push(transaction);
    console.log(`Valid transaction: ${JSON.stringify(transaction)}`);
  } catch (error) {
    invalidTransactions.push({
      index,
      error: error.name,
      message: error.message
    });

    console.log(`Invalid transaction at index ${index}: ${error.name} - ${error.message}`);
  }
}

console.log("\nFinal Reports:");
console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
console.log("Valid transactions: " + JSON.stringify(validTransactions));
console.log("Invalid transactions: " + JSON.stringify(invalidTransactions));
