'use strict';

// Q7 - Select one module to reject so allSettled reports both outcomes.
function loadModule(moduleName, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${moduleName} failed to load.`));
        return;
      }

      resolve(`${moduleName} Loaded`);
    }, delay);
  });
}

const moduleNames = ['Profile', 'Posts', 'Messages'];
const failedModuleIndex = Math.floor(Math.random() * moduleNames.length);
const startTime = Date.now();

console.log('Q7 - Dashboard modules');
Promise.allSettled([
  loadModule('Profile', 2000, failedModuleIndex === 0),
  loadModule('Posts', 1500, failedModuleIndex === 1),
  loadModule('Messages', 1000, failedModuleIndex === 2)
]).then((results) => {
  results.forEach((result, index) => {
    const moduleName = moduleNames[index];
    if (result.status === 'fulfilled') {
      console.log(`${moduleName}: succeeded - ${result.value}`);
    } else {
      console.log(`${moduleName}: failed - ${result.reason.message}`);
    }
  });

  console.log(`Total time: ${Date.now() - startTime} ms`);
});
