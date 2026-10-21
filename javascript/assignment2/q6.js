// Keep the counter and its update functions in the same enclosing scope.
function runCounterSimulation() {
  let count = 0;

  function logCount() {
    console.log(`Current count: ${count}`);
  }

  function increment() {
    count += 1;
    logCount();
  }

  function decrement() {
    count -= 1;
    logCount();
  }

  // Simulate click events by calling each function.
  increment();
  increment();
  decrement();
}

runCounterSimulation();
