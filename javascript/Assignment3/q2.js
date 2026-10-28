'use strict';

// Q2 - Employee Bonus Calculator
// strict mode is enabled to prevent accidental global variable creation.
// Each employee record is validated before salary and years are converted.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function parseEmployeeNumber(value, fieldName) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`Missing ${fieldName} value.`);
  }

  const convertedNumber = Number(value);
  if (Number.isNaN(convertedNumber)) {
    throw new Error(`Invalid ${fieldName}: ${value}`);
  }

  return convertedNumber;
}

console.log("Q2 - Employee Bonus Calculator\n");

for (const employee of employees) {
  try {
    const salary = parseEmployeeNumber(employee.salary, "salary");
    const years = parseEmployeeNumber(employee.years, "years");
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(
      `Employee: ${employee.name} | Salary: ${salary.toLocaleString()} | Years: ${years} | Bonus: ${bonus.toLocaleString()} | Total: ${(salary + bonus).toLocaleString()}`
    );
  } catch (error) {
    console.log(`Error for ${employee.name || "unknown employee"}: ${error.message}`);
  }
}
