'use strict';

const products = [
  { id: 1, name: 'Notebook', category: 'Stationery', price: 4, stock: 3 },
  { id: 2, name: 'Pen set', category: 'Stationery', price: 7, stock: 12 },
  { id: 3, name: 'Mug', category: 'Kitchen', price: 10, stock: 4 },
  { id: 4, name: 'Bottle', category: 'Kitchen', price: 18, stock: 8 },
  { id: 5, name: 'Desk lamp', category: 'Home', price: 32, stock: 2 }
];

function getLowStockProducts(items, threshold = 5) {
  return items.filter((product) => product.stock < threshold);
}

function sortProductsByPrice(items) {
  return [...items].sort((first, second) => first.price - second.price);
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
  return items.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);
    return groups;
  }, {});
}

console.log('Q6 - E-commerce inventory');
console.log('Low stock (fewer than 5 units):', getLowStockProducts(products).map((product) => product.name));
console.log('Sorted by price:', sortProductsByPrice(products).map((product) => `${product.name} ($${product.price})`));
console.log(`Total inventory value: $${calculateTotalInventoryValue(products).toFixed(2)}`);
console.log('Grouped by category:', groupByCategory(products));
