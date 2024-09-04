console.log("Hello World");

const someMessage = "Its's six o'clock";
console.log(someMessage);

// Template Literals `

const multiLineString = `This is line one
This is line two`;
console.log(multiLineString);

// String Interpolation
const myName = "Hershyl";
const greeting = `Hello, ${myName}`;
console.log(greeting);

// Concatenationg Strings

const greeting2 = "Hello, " + myName + "!";
console.log(greeting2);

// String Length
const myMessage = "Teapot";
console.log(myMessage.length);
// Select a character
console.log(myMessage[2]);
// Select Last character of a string
// COMMON PRACTICE
console.log(myMessage[myMessage.length - 1]);
// As of ES 2022
console.log(myMessage.at(-1));

// Excercise 3

// Create four variables to store the following strings:
const line1 = '"Concentrate all your thoughts ';
const line2 = "upon the work in hand. The sun's rays do not burn ";
const line3 = 'until brought to a focus."';
const line4 = " - Alexander Graham Bell";

// Concatenate them up(using the + operator or
const fullQuote = line1 + line2 + line3 + line4;
// Template Literals`)
const tlQuote = `${line1}${line2}${line3}${line4}`;

// Print the entire string in the console, and also

console.log(fullQuote);
console.log(tlQuote);

// Assign it in a new variable and print its total length in the console.
const fullLength = fullQuote.length;
console.log(fullLength);

// Excercise 4

const height = 1.83;
const weight = 100;
const bmi = (BMI = weight / (height * height));

console.log(bmi.toFixed(1));

// Intl.NumberFormat

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const bookPrice = 5;
const totalSpend = bookPrice * 10;

console.log(USDollar.format(totalSpend));
console.log(`I stored the book price(5) to a variable and then in another
variable I took the book price and times that by the amount of books they purchased(10)
then I  printed that to the console.`);
