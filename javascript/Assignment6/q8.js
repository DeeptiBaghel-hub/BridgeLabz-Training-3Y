'use strict';

// Q8 - Retry a simulated order submission up to three times.
function submitOrder() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error('Order submission failed.'));
      return;
    }

    resolve('Order submitted');
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success - ${result}`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed - ${error.message}`);
    }
  }

  throw new Error('Order could not be processed');
}

console.log('Q8 - Order retry mechanism');
processOrder().catch((error) => {
  console.error(`Final failure: ${error.message}`);
});
