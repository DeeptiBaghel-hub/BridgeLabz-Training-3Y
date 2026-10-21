// Normalize the product title, capitalize each word, and expand "Pro".
const productName = " wireless headphones PRO ";
const lowercaseTitle = productName.trim().toLowerCase();
const capitalizedTitle = lowercaseTitle
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
const cleanedTitle = capitalizedTitle.replace("Pro", "Pro Edition");

console.log(`Product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
