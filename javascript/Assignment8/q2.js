'use strict';

const menu = [
  { name: 'Burger', price: 8.5 },
  { name: 'Salad', price: 6 },
  { name: 'Juice', price: 3.5 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const item = menu.find((menuItem) => menuItem.name === itemName);

    if (!item) {
      throw new Error(`"${itemName}" is not available on the menu.`);
    }

    return item.price;
  });

  return prices.reduce((total, price) => total + price, 0);
}

console.log('Q2 - Online food ordering');
for (const order of [['Burger', 'Juice'], ['Pizza']]) {
  try {
    console.log(`Order ${order.join(', ')}: $${calculateBill(order).toFixed(2)}`);
  } catch (error) {
    console.log(`Unable to process order: ${error.message}`);
  }
}
