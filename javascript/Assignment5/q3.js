'use strict';

// Q3 - Arrow functions capture `this` from the surrounding scope.
const user = {
  name: 'Alex',
  showName: () => console.log(this.name)
};

console.log('Q3 - Arrow function this:');
user.showName(); // `this.name` is undefined.
console.log('An arrow function does not get `this` from the object that calls it.');

// A normal method gets `this` from the object used to call it.
user.showName = function () {
  console.log(this.name);
};

console.log('Normal function method:');
user.showName();
