console.log("Hello World");

// function someFunc() {
//   let x = "paper";
//   if (true) {
//     console.log(x);
//     let someOtherX = "mouse";
//   }
//   //console.log(someOtherX);
// }
// someFunc();
let myName = "Reuben";
function sayHi() {
  let myName = "Obama";
  console.log(myName + " says good morning.");
}
function sayHi2() {
  console.log(myName + " says good morning again");
}
sayHi();
sayHi2();

// Traditional Function
function doubleNum(num) {
  return num * 2;
}
// Arrow Function
let doubleNum2 = (num) => {
  return num * 2;
};

// Arrow Function Excercise
let divFunc = (num1, num2) => num1 / num2;
console.log(divFunc(10, 2));

let isEven = (num) => num % 2 === 0;
console.log(isEven(7));

// Default Parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2));
console.log(multiply(5));

// Default Parameter Excercise
let multiply2 = (a, b = 1) => a * b;

// Spread Operator
// A way to create a copy of an array. Not pass a reference.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [0, ...arr1, 6, 7, 8, 9];
let arr3 = [6, 7, 8, 9, 10];
let arr4 = [...arr1, ...arr3];

console.log(arr2); //[0,1,2,3,4,5,6,7,8,9]
console.log(arr1); //[1,2,3,4,5]
console.log(arr3); //[6, 7, 8, 9, 10]
console.log(arr4); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Spread Operator Excercise
let arr11 = [1, 2, 3];
let arr22 = ["A", "B", "C"];

let arr33 = [...arr11, ...arr22];

console.log(arr33);

// JS Shorthand

let answer;
let x = 9;

if (x > 10) {
  answer = "greater than 10";
} else {
  answer = "less than 10";
}
// Shorthand example of the above
const answer1 = x > 10 ? "greater than 10" : "less than 10";

console.log(answer);
console.log(answer1);

// Regular Expression
let myRegex1 = new RegExp("a|b");
let myRegex2 = /a|b/;

console.log(myRegex1.test("mission"));
console.log(myRegex1.test("ready"));
console.log(myRegex1.test("b"));
console.log(myRegex1.test("cat"));
