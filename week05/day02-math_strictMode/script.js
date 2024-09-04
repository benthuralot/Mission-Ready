// Math.max(5, 3, 7); // 7
// Math.min(5, 3, 7); // 3
// Math.abs(-22); //22 Returns the absolute value of x. Always positive.
// Math.floor(5.05); // Always rounds down. Returns 5
// Math.floor(5.95); // Always rounds down. Returns 5
// Math.ceil(5.01); // Always rounds up. Returns 6
// Math.round(5.95); // Rounds up. Returns 6
// Math.round(5.05); // Rounds down. Returns 5
// Math.round(5.5); // Rounds up. Returns 6
// (1.3579).toFixed(2); // Fixes the number of decimal places to 2. Returns 1.36
// Math.pow(3, 2); // base, exponent. Returns 9
// Math.random(); // pseudo random number between 0 & 1. Output unknown

// Math.E; // returns Euler's number
// Math.PI; // returns PI
// Math.SQRT2; // returns the square root of 2
// Math.LN2; // returns the natural logarithm of 2
// Math.LN10; // returns the natural logarithm of 10
// Math.LOG2E; // returns base 2 logarithm of E
// Math.LOG10E; // returns base 10 logarithm of E

// Excercise 1

// const myArray = [6, 7, 8, 12, 20, 99];
// let smallestNum = Math.min(...myArray);
// console.log(smallestNum);
// let largestNum = Math.max(...myArray);
// console.log(largestNum);
// console.log(smallestNum ** 2);

// ---- Math.random() -----
// Random 1-100
// const rdmNum101 = Math.floor(Math.random() * 100) + 1; // 1 - 100
// // Random 0-100
// const rdmNum100 = Math.floor(Math.random() * 101); // 0 - 100

// // Excercise 2

// const myFruits = [
//   "Mango",
//   "Watermelon",
//   "Pineapple",
//   "Coconut",
//   "Banana",
//   "Kiwifruit",
//   "Apple",
//   "Orange",
//   "Grapes",
//   "Peaches",
// ];

// const random = Math.floor(Math.random() * myFruits.length);
// console.log(myFruits[random]);
// console.log(random);

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// ------ Days Difference ------
const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const displayEl = document.querySelector("#result");
const calculateButton = document.querySelector("button");

calculateButton.addEventListener("click", () => {
  //   console.log("Button clicked");
  //   console.log(date1.value);
  //   console.log(date2.value);
  const dateOne = new Date(date1.value);
  const dateTwo = new Date(date2.value);

  if (!date1.value || !date2.value) {
    displayEl.innerHTML = "Please enter both dates!";
  } else {
    const difference = Math.abs(dateTwo - dateOne);
    // console.log((difference / 1000) * 60 * 60 * 24);
    // console.log(
    //   `days difference is ${difference / (1000 * 60 * 60 * 24)} days`
    // );
    displayEl.innerHTML = `days difference is ${
      difference / (1000 * 60 * 60 * 24)
    } days`;
  }
});
