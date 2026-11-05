'use strict';

// Q1 - E-Commerce Product Manager
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) {
      throw new RangeError('Discount must be between 0 and 100 percent.');
    }

    this.price *= 1 - discountPercent / 100;
    return this.price;
  }

  getDetails() {
    return `#${this.id} ${this.name} | ${this.category} | $${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(101, 'Wireless Headphones', 1499, 'Electronics'),
  new Product(102, 'Notebook', 250, 'Stationery'),
  new Product(103, 'Coffee Maker', 2299, 'Home')
];

products[0].applyDiscount(10);

console.log('Q1 - E-Commerce Product Manager');
console.log('Products priced over 1000:');
products
  .filter((product) => product.price > 1000)
  .forEach((product) => console.log(product.getDetails()));
