'use strict';

// Q1 - Pass a callback to run after greeting the user.
function showEndMessage() {
  console.log('Welcome to the course!');
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

console.log('Q1 - Callback flow');
greetUser('Alex', showEndMessage);
