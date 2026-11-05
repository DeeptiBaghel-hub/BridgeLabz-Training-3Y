'use strict';

// Q9 - Prototype-based Person and Student constructors.
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  return `Name: ${this.name}`;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  return `Branch: ${this.branch}`;
};

// The class version uses extends and super() to establish the same inheritance.
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return `Name: ${this.name}`;
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  showBranch() {
    return `Branch: ${this.branch}`;
  }
}

const prototypeStudent = new Student('Jordan', 'Biology');
const classStudent = new StudentClass('Jordan', 'Biology');

console.log('Q9 - Prototype and class inheritance');
console.log('Prototype:', prototypeStudent.showName(), '|', prototypeStudent.showBranch());
console.log('Class:', classStudent.showName(), '|', classStudent.showBranch());
console.log(
  'Both versions produce the same results:',
  prototypeStudent.showName() === classStudent.showName()
    && prototypeStudent.showBranch() === classStudent.showBranch()
);
