console.log("Hello World from the external JavaScript file")
// Initialize Variables
let x = 5;
const y = 6;

console.log(x)
console.log(y)
// We don't need to initialize for LET keyword
let z;
// const myVar;

// Variable Re-Declaration
let a = 5;
let ab = 10;

const b = 6;
const bc = 16;

// Variable Re-Assignment
let num = 5;
num = 10;  //re-assignment
num = 100;
console.log(num)

const myNum = 5;
// myNum = 16;
console.log(myNum)// Uncaught TypeError: Assignment to constant variable.

// Excercise 1

const firstAndLastName = "Hershyl Seumanu";
console.log(firstAndLastName)

let age = 29;
console.log(age)

// Excercise 2 Variables

let currentYear = 2024;
let myBirthYear =1994;
const ageCalc = currentYear - myBirthYear;

console.log(currentYear)
console.log(myBirthYear)
console.log(ageCalc)