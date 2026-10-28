'use strict';

// Q9 - Shopping Cart Total
class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Item name is required.');
    }
    if (!Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity <= 0) {
      throw new RangeError('Price must be non-negative and quantity must be a positive integer.');
    }
    this.items.push({ name: name.trim(), price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(couponCode) {
    const match = /^(?:SAVE|DISC)(\d{1,2})$/i.exec(couponCode);
    if (!match) {
      throw new Error('Invalid coupon. Use a code such as SAVE20 or DISC10.');
    }

    const discountPercent = Number(match[1]);
    if (discountPercent <= 0 || discountPercent > 100) {
      throw new RangeError('Coupon discount must be greater than 0 and no more than 100 percent.');
    }

    return this.getTotal() * (1 - discountPercent / 100);
  }
}

const cart = new Cart();
cart.addItem('Keyboard', 75, 1);
cart.addItem('Mouse', 25, 2);
const couponCode = 'SAVE20';

console.log('Q9 - Shopping Cart Total');
console.log('Items:', cart.items);
console.log(`Subtotal: $${cart.getTotal().toFixed(2)}`);

try {
  const discountedTotal = cart.applyCoupon(couponCode);
  console.log(`Coupon ${couponCode} applied. Final total: $${discountedTotal.toFixed(2)}`);
} catch (error) {
  console.log(`Coupon error: ${error.message}`);
}
