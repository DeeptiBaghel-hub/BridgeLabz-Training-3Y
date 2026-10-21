// Keep each category and its monthly expense together in the array.
const expenses = [
  { category: "Food", amount: 8500 },
  { category: "Travel", amount: 3200 },
  { category: "Rent", amount: 18000 },
  { category: "Bills", amount: 2400 },
  { category: "Leisure", amount: 1900 },
];

let totalExpenses = 0;

for (const expense of expenses) {
  totalExpenses += expense.amount;
}

const averageExpense = totalExpenses / expenses.length;
let finalAmount = totalExpenses;
finalAmount *= 1.10;

console.log(`Total expenses: $${totalExpenses.toFixed(2)}`);
console.log(`Average expense: $${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: $${finalAmount.toFixed(2)}`);
