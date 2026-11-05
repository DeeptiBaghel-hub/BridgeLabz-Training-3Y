'use strict';

// Q6 - Employee Management System
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (percent < 0) {
      throw new RangeError('Bonus percent cannot be negative.');
    }
    this.salary *= 1 + percent / 100;
    return this.salary;
  }
}

const employees = [
  new Employee(1, 'Amit', 'Engineering', 50000),
  new Employee(2, 'Sara', 'Marketing', 46000),
  new Employee(3, 'Kiran', 'Finance', 55000),
  new Employee(4, 'Mina', 'Engineering', 52000),
  new Employee(5, 'Alex', 'Support', 42000)
];

console.log('Q6 - Employee Management System');
for (const employee of employees) {
  console.log(`${employee.name} (${employee.department}): annual salary = $${employee.getAnnualSalary().toFixed(2)}`);
}

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);
console.log(`Total annual company payout: $${totalAnnualPayout.toFixed(2)}`);

employees[0].applyBonus(5);
console.log(`Amit's annual salary after 5% bonus: $${employees[0].getAnnualSalary().toFixed(2)}`);
