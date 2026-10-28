'use strict';

// Q9 - JSON Audit
// Each JSON string is parsed in a loop with try/catch.
// Missing fields and malformed JSON are logged and separated from valid entries.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errorLog = [];

console.log("Q9 - JSON Audit\n");

for (let index = 0; index < rawData.length; index++) {
  const entry = rawData[index];
  debugger;

  try {
    const parsed = JSON.parse(entry);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Parsed result is not a valid object.");
    }

    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error("Missing required keys: user and age.");
    }

    const age = Number(parsed.age);
    if (Number.isNaN(age)) {
      throw new Error("Age is not numeric.");
    }

    const safeEntry = {
      user: parsed.user,
      age: age
    };

    cleanData.push(safeEntry);
    console.log(`Line ${index + 1}: valid JSON -> ${JSON.stringify(safeEntry)}`);
  } catch (error) {
    errorLog.push({
      line: index + 1,
      entry,
      error: error.message
    });

    console.log(`Line ${index + 1}: ERROR -> ${error.message}`);
  }
}

console.log("\nClean entries:");
console.log(JSON.stringify(cleanData, null, 2));

console.log("\nErrors:");
console.log(JSON.stringify(errorLog, null, 2));

const under18Users = cleanData.filter((user) => user.age < 18);
console.log("\nUnder-18 users:");
console.log(JSON.stringify(under18Users, null, 2));
