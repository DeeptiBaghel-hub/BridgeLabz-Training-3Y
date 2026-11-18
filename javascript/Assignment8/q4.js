'use strict';

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is completing ${this.department} work.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is coordinating the ${this.department} team.`;
  }
}

const staff = [
  new Employee('Ethan', 'Engineering'),
  new Manager('Olivia', 'Marketing')
];

console.log('Q4 - Employee inheritance and runtime polymorphism');
staff.forEach((person) => console.log(person.work()));
