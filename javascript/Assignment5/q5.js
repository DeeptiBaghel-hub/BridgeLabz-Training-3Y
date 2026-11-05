'use strict';

// Q5 - Student inherits Person's constructor data and prototype methods.
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student('Alex', 'Computer Science');

console.log('Q5 - Person and Student prototype chain');
student.showName();
student.showBranch();
console.log('Student inherits from Person:', Person.prototype.isPrototypeOf(student));
