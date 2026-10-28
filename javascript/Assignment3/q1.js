'use strict';

// Q1 - Dynamic Data Parser
// Mixed API values are converted to Number, Boolean, and String forms.
// Invalid numerics are separated so they can be handled safely and logged clearly.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];
const conversionReport = [];

console.log("Q1 - Dynamic Data Parser\n");

for (let i = 0; i < apiData.length; i++) {
  const rawValue = apiData[i];
  const numberValue = Number(rawValue);
  const booleanValue = Boolean(rawValue);
  const stringValue = String(rawValue);

  conversionReport.push({
    index: i,
    raw: rawValue,
    number: numberValue,
    boolean: booleanValue,
    string: stringValue
  });

  // NaN, empty/space strings, and non-numeric strings are invalid numeric inputs.
  const isInvalidNumber = Number.isNaN(numberValue) || rawValue === " " || rawValue === "100px" || rawValue === null || rawValue === undefined;

  if (isInvalidNumber) {
    invalidNumericData.push({
      index: i,
      raw: rawValue,
      reason: Number.isNaN(numberValue) ? "NaN value" : rawValue === " " ? "Blank space value" : rawValue === "100px" ? "Non-numeric string" : "Null/Undefined value"
    });
  } else {
    validNumericData.push(numberValue);
  }
}

console.log("Detailed conversion report:");
for (const item of conversionReport) {
  console.log(`Index ${item.index}: raw=${String(item.raw)} | Number=${item.number} | Boolean=${item.boolean} | String=${item.string}`);
}

console.log("\nValid numeric data:");
for (const num of validNumericData) {
  console.log(`- ${num}`);
}

console.log("\nInvalid numeric data:");
for (const item of invalidNumericData) {
  console.log(`- Index ${item.index}: ${String(item.raw)} => ${item.reason}`);
}

console.log("\nSummary: valid count = " + validNumericData.length + ", invalid count = " + invalidNumericData.length);
