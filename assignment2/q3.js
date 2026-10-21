// Calculate the requested math values for the sample number.
const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Math Dashboard
Input: ${x}
Rounded: ${roundedValue}
Square root: ${squareRoot}
Power of 3: ${cubedValue}
Random number (10-50): ${randomNumber}`);
