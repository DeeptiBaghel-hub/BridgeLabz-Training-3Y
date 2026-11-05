'use strict';

// Q7 - The returned function closes over the multiplier parameter.
function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);

console.log('Q7 - Closure');
console.log(triple(5)); // 15
console.log('The returned function remembers `multiplier` after makeMultiplier has returned.');
