// Sample purchase amount; replace this value to test other discount tiers.
const originalTotal = 7200;
let discountPercentage;

if (originalTotal >= 10000) {
  discountPercentage = 25;
} else if (originalTotal >= 5000) {
  discountPercentage = 15;
} else if (originalTotal >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

const finalPrice = Math.round(
  originalTotal - (originalTotal * discountPercentage) / 100
);

console.log(`Original total: ${Math.round(originalTotal)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price: ${finalPrice}`);
