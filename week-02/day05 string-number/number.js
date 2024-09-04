console.log("Hello World");

const myNum = 2 ** 53;
const bigIntValue = 1247630712471234;
console.log(myNum);
console.log(bigIntValue);
// BigInt
const bigIntFunction = BigInt("123412341234123412341234");
console.log(bigIntFunction);

let a = 10;
let b = 5;

// exponentiation
const expon = a ** b; // 10 * 10 * 10 * 10 * 10
console.log(expon);

a++; // 11
a = a + 1; // 12
console.log(a);

b--;
console.log(b);

// Modulus or Remainder
console.log(a % b); // 0 (5 fits into 10 twice, without any remainders)

let x = 11;
let y = 5;

console.log(x % y);

let foo = 42;
foo = true;
foo = "true";
console.log(foo, typeof foo);
console.log();

let str = "12";
console.log(str, typeof str);
console.log(Number(str), typeof Number(str));

let num1 = "3";
let num2 = "4";

let sum = +num1 + +num2;
console.log(sum, typeof sum);

// Boolean
// Truthy vs Falsy Values

// All values are 'Truthy' except the following:
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// Comparison operator
console.log(10 == "10"); //true because it doesnt care about the type via regular comparison
console.log(10 === "10"); //false because it is now checking the type via strict check comparison
console.log(10 == "Hello"); //false
console.log("120" == 121);
