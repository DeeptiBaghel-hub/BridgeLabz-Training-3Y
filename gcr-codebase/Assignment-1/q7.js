// Generate a secret number in the inclusive range 1 through 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // Test value; change this to try a different guess.

if (userGuess >= 1 && userGuess <= 50) {
  if (userGuess === secretNumber) {
    console.log("Correct guess!");
  } else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secretNumber) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
} else {
  console.log("Guess must be between 1 and 50.");
}
