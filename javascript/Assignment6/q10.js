'use strict';

// Q10 - Each delivery step is asynchronous and can randomly fail.
function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);

    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      resolve(successMessage);
    }, delay);
  });
}

async function runPipeline() {
  console.log('Start Pipeline');

  // Calling an async function starts the first step and returns a Promise.
  // Each await suspends this function until that step settles; the event loop
  // can process other work during the delay. A rejection jumps to the catch.
  try {
    const orderMessage = await runDeliveryStep('takeOrder', 'Step 1: Order taken');
    console.log(orderMessage);

    const prepareMessage = await runDeliveryStep('prepare', 'Step 2: Food prepared');
    console.log(prepareMessage);

    const packMessage = await runDeliveryStep('pack', 'Step 3: Package ready');
    console.log(packMessage);

    const dispatchMessage = await runDeliveryStep('dispatch', 'Step 4: Out for delivery');
    console.log(dispatchMessage);

    await runDeliveryStep('deliver', 'Delivery completed!');
    console.log('Delivery completed!');
  } catch (error) {
    console.error(`Pipeline failed! ${error.message}`);
  }
}

runPipeline();
