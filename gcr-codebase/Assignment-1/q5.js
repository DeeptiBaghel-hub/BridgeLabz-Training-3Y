// Change these values to try different weather conditions.
const temperature = 22;
const isRaining = false;
const windSpeed = 8;
const isColdAndWindy = temperature < 15 && windSpeed > 20;
const shouldStayHome = isRaining || isColdAndWindy;

if (shouldStayHome) {
  if (isRaining) {
    console.log("Stay indoors with hot coffee.");
  } else {
    console.log("Too cold and windy — stay home.");
  }
} else if (temperature > 35 && !isRaining) {
  console.log("Go swimming.");
} else {
  console.log("Perfect day for a walk.");
}
