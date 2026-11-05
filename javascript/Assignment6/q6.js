'use strict';

// Q6 - Fetch products and display their titles, prices, and image URLs.
async function displayProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`Product API returned HTTP ${response.status}.`);
    }

    const products = await response.json();
    if (!Array.isArray(products)) {
      throw new TypeError('Product API response was not a list.');
    }

    for (const product of products) {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log('');
    }
  } catch (error) {
    console.error('Failed to load products. Please try again.');
    console.error(`Details: ${error.message}`);
  }
}

console.log('Q6 - Fake Store product fetcher');
if (typeof fetch !== 'function') {
  console.error('Failed to load products. Please try again.');
  console.error('This example requires a runtime with the built-in fetch API.');
} else {
  displayProducts();
}
