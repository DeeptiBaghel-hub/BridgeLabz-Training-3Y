'use strict';

// Q2 - Promise callbacks are microtasks; setTimeout callbacks are macrotasks.
// The current synchronous script runs first. After it finishes, JavaScript
// drains the microtask queue before starting the next macrotask.
console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise callback');
});

console.log('Synchronous log');
console.log('End');
