'use strict';

// Q6 - Each constructor adds its own data and prototype method to the chain.
function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`Faculty department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(`Professor teaches: ${this.subject}`);
};

const professor = new Professor('Dr. Rivera', 'Science', 'Physics');

console.log('Q6 - Person -> Faculty -> Professor');
professor.introduce();
professor.showDepartment();
professor.teach();
