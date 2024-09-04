console.log("Mic check 1, 2!");

// Function syntax
// • Let’s look at how we write functions in our code

// function myFirstFunction() {
//   console.log("I just called my first function");
// }

// myFirstFunction(); // Call the function

// Function Parameters

// function funcWithParams(num1, num2) {
//   console.log(num1 + num2);
// }
// funcWithParams(3, 4); // answer is 7

// Excercise 1

// function milkshakeBlender(magic1, magic2) {
//   console.log(`My milkshake is made by ${magic1} and ${magic2}`);
// }

// milkshakeBlender("strawberry", "banana");

// Excercise 2

// function stringFunc(str) {
//   const result = str === "" ? false : true;
//   return result;
// or return Boolean(str)
// }

// console.log(stringFunc(""));
// console.log(stringFunc("Not Empty"));

// Life In Weeks Coding Excercise

// function lifeInWeeks(age) {
//   let days = (50 - age) * 365;
//   let weeks = (50 - age) * 52;
//   let months = (50 - age) * 12;

//   const message = `You have ${days} days, ${weeks} weeks, and ${months} months left.`;

//   return console.log(message);
// }

// lifeInWeeks(30);

// Window Object
console.log(window);

// alert("My alert"); // which is the same as
// window.alert("Still an alert");

// let message = prompt("How old are you?", "default string"); // !PROMPT ALWAYS returns a string!
// console.log(message);
// console.log(typeof Number.parseInt(message));

// Excercise 1

// let colour = prompt("What's your favourite color?");

// if (colour === "red") {
//   alert("That's my favourite colour!");
// } else if (colour === "") {
//   alert("You didn't enter anything.");
// } else {
//   alert(`Your favourite colour is ${colour}`);
// }

// Excercise 2

const userMessage = prompt("Enter a sentence").trim();

userMessage === ""
  ? alert("You entered nothing. Please enter a sentence.")
  : userMessage.length <= 10
  ? alert(userMessage.toUpperCase())
  : alert(userMessage.toLowerCase());
