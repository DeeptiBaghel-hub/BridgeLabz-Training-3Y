'use strict';

// Q8 - Add a map-like method that preserves sparse-array behavior and thisArg.
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('myMap must be called on an array.');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('myMap callback must be a function.');
  }

  const source = Object(this);
  const result = new Array(source.length);

  for (let index = 0; index < source.length; index += 1) {
    if (index in source) {
      result[index] = callback.call(thisArg, source[index], index, source);
    }
  }

  return result;
};

console.log('Q8 - Custom array map');
console.log([1, 2, 3].myMap((number) => number * 2));
