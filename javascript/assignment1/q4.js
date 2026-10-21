// Marks are out of 100 for each of the five subjects.
const subjectMarks = [92, 87, 81, 90, 88];
const totalMarks = subjectMarks.reduce((total, marks) => total + marks, 0);
const averageMarks = totalMarks / subjectMarks.length;
const overallPercentage = (totalMarks / (subjectMarks.length * 100)) * 100;
const hasFailedSubject = subjectMarks.some((marks) => marks < 35);

let result;

if (hasFailedSubject || overallPercentage < 50) {
  result = "Detained";
} else if (overallPercentage >= 85) {
  result = "Promoted with Distinction";
} else if (overallPercentage >= 50 && overallPercentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(result);
