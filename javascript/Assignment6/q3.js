'use strict';

// Q3 - Replace a callback-based bug request with a Promise.
function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.3;

    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Bug tracker API request failed.'));
        return;
      }

      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

console.log('Q3 - Promise-based bug tracker');
getBugs()
  .then((bugs) => {
    console.table(bugs.map((description) => ({ description })));
  })
  .catch((error) => {
    console.error(`Could not load bugs: ${error.message}`);
  });
