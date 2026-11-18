'use strict';

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  return this.price * (1 - percent / 100);
};

const products = [
  new Product('Headphones', 120),
  new Product('Keyboard', 80),
  new Product('Monitor', 300)
];
const discounts = [10, 15, 20];

console.log('Q3 - Product discounts');
products.forEach((product, index) => {
  console.log(
    `${product.name}: $${product.price.toFixed(2)} after ${discounts[index]}% discount = $${product.applyDiscount(discounts[index]).toFixed(2)}`
  );
});
console.log('Abstraction: applyDiscount hides the price calculation behind one reusable method.');
