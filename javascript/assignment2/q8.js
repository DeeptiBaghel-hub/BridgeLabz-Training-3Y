// Apply category discounts to each cart item.
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];
const discountedItems = [];
const cartValue = cart.reduce((total, product) => total + product.price, 0);

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.1;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  discountedItems.push({
    item: product.item,
    discountedPrice: product.price * (1 - discountRate),
  });
}

// Apply the overall discount to the category-discounted total when eligible.
let finalTotal = discountedItems.reduce(
  (total, product) => total + product.discountedPrice,
  0
);
const extraDiscountApplied = cartValue > 50000;

if (extraDiscountApplied) {
  finalTotal *= 0.95;
}

console.log(`Cart value before discounts: ${cartValue.toFixed(2)}`);
console.log(`Extra 5% discount applied: ${extraDiscountApplied}`);
console.log(`Final cart total: ${finalTotal.toFixed(2)}`);
