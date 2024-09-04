console.log("loop test 123");

// For Loop
// Excercise 1

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// Excercise 2

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Excercise 3

// const myString = "Responsiveness";

// for (i = 0; i < myString.length; i++) {
//   console.log(myString[i]);
// }

// Excercise 4

// const foods = ["salad", "pie", "pickles", "scones"];
// for (i = 0; i < foods.length; i++) {
//   console.log(`I like ${foods[i]}`);
// }

// Excercise 5

// const brekkies = ["bacon", "pie", "eggs", "pancake"];

// for (const food of brekkies) {
//   console.log(`"I like ${food}."`);
// }

// Excercise 6

// const numberArray = [7, 13, 26, 49, 55];
// let total = 0;
// for (i = 0; i < numberArray.length; i++) {
//   total += numberArray[i];
// }
// console.log(`The total number is: ${total}`);

// // Excercise 7
// let count = 0;
// let sum = 0;
// while (count < numberArray.length) {
//   sum += numberArray[count];
//   count++;
// }
// console.log(`The total number is once again: ${sum}`);

// Excercise 8

// const myString = "Hell@ the#e";

// for (i = 0; i < myString.length; i++) {
//   if (
//     myString[i] === "!" ||
//     myString[i] === "@" ||
//     myString[i] === "#" ||
//     myString[i] === "$"
//   ) {
//     console.log(`ERROR: "${myString[i]}"`);
//     break;
//   } else {
//   }
// }

// const student = {
//   name: "Rob",
//   age: 5,
//   isAdmin: true,
// };
// for (const key in student) {
//   console.log(key); // name, age, isAdmin
//   console.log(student[key]); // Rob, 5, true
// }

// Excercise 9 Using CONTINUE

// const myString = "H!ell@o#Wo$rld";
// let newString = "";

// for (i = 0; i < myString.length; i++) {
//   if (
//     myString[i] === "!" ||
//     myString[i] === "@" ||
//     myString[i] === "#" ||
//     myString[i] === "$"
//   ) {
//     continue;
//   } else {
//     newString += myString[i];
//   }
// }
// console.log(newString);

// Bonus: Excercise 9 For..in

// const user = {
//   name: "John",
//   age: 5,
//   isAdmin: true,
// };

// for (const key in user) {
//   if (key === "age") {
//     console.log(user["age"]);
//     break;
//   } else {
//   }
// }

// Bonus: Excercise 10

const myFavNumbers = {
  fav1: 6,
  fav2: 8,
  fav3: 12,
};
let total = 0;

for (num in myFavNumbers) {
  total += myFavNumbers[num];
}
console.log(total);
