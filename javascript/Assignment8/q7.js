'use strict';

class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (!Number.isFinite(initialBalance) || initialBalance < 0) {
      throw new Error('Initial balance must be a non-negative number.');
    }

    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error('Deposit amount must be a positive number.');
    }

    this.#balance += amount;
    return this.getBalance();
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error('Withdrawal amount must be a positive number.');
    }

    if (amount > this.#balance) {
      throw new Error('Insufficient funds for this withdrawal.');
    }

    this.#balance -= amount;
    return this.getBalance();
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);

console.log('Q7 - Banking application');
console.log(`Initial balance: $${account.getBalance().toFixed(2)}`);
console.log(`After $50 deposit: $${account.deposit(50).toFixed(2)}`);
console.log(`After $30 withdrawal: $${account.withdraw(30).toFixed(2)}`);

try {
  account.withdraw(500);
} catch (error) {
  console.log(`Withdrawal declined: ${error.message}`);
}

console.log(`Final balance: $${account.getBalance().toFixed(2)}`);
