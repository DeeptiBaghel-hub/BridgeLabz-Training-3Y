'use strict';

// Q5 - Use an error-first callback to demonstrate the nested callback pipeline.
function runCallbackStage(stageName, callback) {
  setTimeout(() => {
    console.log(`Callback stage: ${stageName}`);
    callback(null);
  }, 1000);
}

function runCallbackPipeline() {
  console.log('Q5 - Nested callback pipeline');
  runCallbackStage('design', (error) => {
    if (error) {
      console.error(`Callback pipeline failed: ${error.message}`);
      return;
    }

    runCallbackStage('build', (buildError) => {
      if (buildError) {
        console.error(`Callback pipeline failed: ${buildError.message}`);
        return;
      }

      runCallbackStage('test', (testError) => {
        if (testError) {
          console.error(`Callback pipeline failed: ${testError.message}`);
          return;
        }

        runCallbackStage('deploy', (deployError) => {
          if (deployError) {
            console.error(`Callback pipeline failed: ${deployError.message}`);
            return;
          }

          runCallbackStage('celebrate', (celebrateError) => {
            if (celebrateError) {
              console.error(`Callback pipeline failed: ${celebrateError.message}`);
            }
          });
        });
      });
    });
  });
}

function runAsyncStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async stage: ${stageName}`);
      resolve();
    }, 1000);
  });
}

async function runAsyncPipeline() {
  console.log('Q5 - Async/await pipeline');

  // Each await makes the next stage wait for the current asynchronous stage,
  // while keeping the sequence readable without deeply nested callbacks.
  await runAsyncStage('design');
  await runAsyncStage('build');
  await runAsyncStage('test');
  await runAsyncStage('deploy');
  await runAsyncStage('celebrate');
}

runCallbackPipeline();
runAsyncPipeline().catch((error) => {
  console.error(`Async pipeline failed: ${error.message}`);
});
