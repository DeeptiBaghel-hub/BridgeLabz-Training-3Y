'use strict';

// Q9 - Predicted order:
// Script start
// Script end
// Promise callback
// Timeout callback
// Synchronous logs run immediately. Promise callbacks are queued as microtasks
// and run after the script, before setTimeout macrotasks.
console.log('Script start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('Script end');
