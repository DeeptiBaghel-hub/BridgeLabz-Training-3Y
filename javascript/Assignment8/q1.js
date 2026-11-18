'use strict';

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) {
      throw new Error('Marks must contain at least one value.');
    }

    return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    return 'F';
  }
}

const students = [
  new Student('Ava', [92, 88, 95]),
  new Student('Noah', [84, 79, 82]),
  new Student('Mia', [65, 72, 68])
];

console.log('Q1 - Student results');
students.forEach((student) => {
  console.log(
    `${student.name}: average ${student.calculateAverage().toFixed(2)}, grade ${student.getGrade()}`
  );
});
