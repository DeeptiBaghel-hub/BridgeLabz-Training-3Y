'use strict';

// Q4 - Create independent server requests for all() and race().
function deployToServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} deployment failed.`));
        return;
      }

      resolve(`${serverName} deployment completed`);
    }, delay);
  });
}

console.log('Q4 - Concurrent deployment servers');

Promise.all([
  deployToServer('Server A', 2000),
  deployToServer('Server B', 3000)
])
  .then(() => console.log('Deployment completed for all servers'))
  .catch((error) => console.error(`Deployment error: ${error.message}`));

Promise.race([
  deployToServer('Server A', 2000),
  deployToServer('Server B', 3000)
])
  .then((response) => console.log(`Fastest response: ${response}`))
  .catch((error) => console.error(`Fastest request failed: ${error.message}`));
