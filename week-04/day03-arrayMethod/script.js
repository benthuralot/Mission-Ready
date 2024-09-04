// console.log("Hello World");
const icecreams = ["vanilla", "chocolate", "blueberry"];

// // push()
// const pushMethod = icecreams.push("rainbow");
// console.log(pushMethod);
// console.log(icecreams);

// // pop()
// const popMethod = icecreams.pop();
// console.log(popMethod);
// console.log(icecreams);

// // unshift()
// const unshiftMethod = icecreams.unshift("tiramisu");
// console.log(unshiftMethod);
// console.log(icecreams);

// // shift()
// const shiftMethod = icecreams.shift();
// console.log(shiftMethod);
// console.log(icecreams);

// // Array.join() Array to String
// const icecreamsJoin = ["vanilla", "chocolate", "matcha"];
// const resulstsIcecreamsJoin = icecreamsJoin.join(" ");

// console.log(resulstsIcecreamsJoin);

// // Array.slice() : Returns a copy of a portion of
// // an array into a new array

// const numberSlice = ["A", "B", "C", "D", "E", "F"];
// const resultsNumberSlice1 = numberSlice.slice(1);
// const resultsNumberSlice2 = numberSlice.slice(1, 3);
// console.log(resultsNumberSlice1);
// console.log(resultsNumberSlice2);
// console.log(numberSlice);

// // Excercise
// const sliceEx = ["html", "css", "JS", "React"];
// const JsSlice = sliceEx.slice(2, 3);

// console.log(JsSlice);

// // Array.splice()
// const numberSplice = ["A", "B", "C", "D", "E", "F"];
// const resulstsNumberSplice = numberSplice.splice(1, 1, "pen");
// console.log(resulstsNumberSplice);
// console.log(numberSplice);

// // Excercise
// const spliceEx = ["html", "css", "react"];
// const newSplice = spliceEx.splice(2, 0, "JS");
// console.log(newSplice);
// console.log(spliceEx);

// Array.forEach()

const icecreamsForEach = ["vanilla", "chocolate", "blueberry"];

// icecreamsForEach.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);

//   console.log(`${index + 1}. ${element} icecream\n`);
// });

// arrow function
// icecreamsForEach.forEach((element, index, array) =>
//   console.log(`${index + 1}. ${element} icecream\n`)
// );

// Excercise

// const originalArray = [3, 8, 12, 17, 22];
// const newArray = [];
// let newElement = 0;

// originalArray.forEach((element) => newArray.push(element * 2));
// console.log(newArray);

// Array.map()

// const orderedIcecreams = icecreams.map(function (icecream, index) {
//   return `Flavour ${index}: ${icecream}`;
// });

// console.log(orderedIcecreams);

// Excercise

// const numberArray = [1, 2, 3, 4, 5];

// const newNumberArray = numberArray.map(function (number) {
//   return number * 2;
// });
// console.log(newNumberArray);

// Array.filter()
// const icecreamCosts = [2.95, 4, 5];
// const expensiveIcecreamCosts = icecreamCosts.filter(function (
//   cost,
//   index,
//   array
// ) {
//   return cost > 3;
// });
// console.log(expensiveIcecreamCosts);

// const numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numberArray1.filter((e) => e % 2 === 0);
// console.log(evenNumbers);

// Array.indexOf()

// Array.includes()

// Excercise
// const arrayOfThings = ["books", "pens", "paper", "pencils", "words"];
// const userInput = prompt("Guess an element in the array:");
// arrayOfThings.includes(userInput) === true
//   ? alert("That's correct")
//   : alert("Not found in array");

// Array.every() && Array.some()
