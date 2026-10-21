// The bonus is shared by the salary calculation.
let bonus = 5000;

function calculateSalary() {
  // These variables are local to this function.
  let salary = 40000;
  let isPermanent = true;

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Permanent employee salary: ${salary}`);

  // Changing the local variable does not change the global bonus.
  isPermanent = false;
  salary = 40000;

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Non-permanent employee salary: ${salary}`);
  console.log(`Global bonus remains: ${bonus}`);
}

calculateSalary();
