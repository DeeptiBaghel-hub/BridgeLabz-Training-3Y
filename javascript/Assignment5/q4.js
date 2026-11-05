'use strict';

// Q4 - Instances share getDetails through Car.prototype.
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`${this.brand} ${this.model}`);
};

const firstCar = new Car('Toyota', 'Corolla');
const secondCar = new Car('Honda', 'Civic');

console.log('Q4 - Shared prototype method');
firstCar.getDetails();
secondCar.getDetails();
console.log('Shared method:', firstCar.getDetails === secondCar.getDetails);
