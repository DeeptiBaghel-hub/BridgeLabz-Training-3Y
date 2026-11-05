'use strict';

// Q1 - Model each coffee-making step as a Promise with a random chance of failure.
function completeCoffeeStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      console.log(`${stepName} complete.`);
      resolve();
    }, delay);
  });
}

console.log('Q1 - Async coffee maker');
completeCoffeeStep('Boiling water')
  .then(() => completeCoffeeStep('Brewing coffee'))
  .then(() => completeCoffeeStep('Pouring coffee into a cup'))
  .then(() => console.log('Coffee ready for the team!'))
  .catch((error) => console.error(`Coffee process failed: ${error.message}`));
