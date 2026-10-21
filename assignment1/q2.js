// Sample values representing the different data types in a user database.
const userName = "Avery";
const accountAge = 3;
const isActive = true;
const favoriteCategories = ["books", "music"];
const userProfile = { city: "Pune", membership: "standard" };
const middleName = null;
let alternateEmail;

const dataEntries = [
  ["String", userName],
  ["Number", accountAge],
  ["Boolean", isActive],
  ["Array", favoriteCategories],
  ["Object", userProfile],
  ["Null", middleName],
  ["Undefined", alternateEmail],
];

// Array.isArray and explicit null handling make these types unambiguous.
const typeReport = dataEntries.map(([label, value]) => {
  let type;

  if (Array.isArray(value)) {
    type = "array";
  } else if (value === null) {
    type = "null";
  } else {
    type = typeof value;
  }

  return { label, value, type };
});

console.table(typeReport);
