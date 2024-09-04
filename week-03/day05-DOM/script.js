console.log("Mic test one two");

// access the body property and add an <H1> tag
// document.body.innerHTML = "<h1>Hello world</h1>";
// access the style property and change background color to blue
// document.body.style.background = "blue";

// DOM Practice 1

// function changeColour() {
//   document.body.style.background = "blue";
// }

function changeColour() {
  document.body.style.background === "blue"
    ? (document.body.style.background = "white")
    : (document.body.style.background = "blue");
}

const colourArray = [
  "hsl(0,100%,100%)",
  "hsl(201,100%,70%)",
  "hsl(0,100%,70%)",
  "hsl(111,100%,70%)",
  "hsl(60,100%,70%)",
  "hsl(30,100%,70%)",
];
let currentColour = 0;

function changeMultiColour() {
  if (currentColour === colourArray.length - 1) {
    currentColour = 0;
  } else {
    currentColour++;
  }

  document.body.style.background = colourArray[currentColour];
}

// Using gtElementById()

// We can use document.getElementById() to get and store our html
// element into a variable:
const headerEl = document.getElementById("header-id");

headerEl.style.fontSize = "30px";
headerEl.textContent = "Look! My text content has changed.";
// Using querySelector
const headerEl1 = (document.querySelector("h1").style.background =
  "hsl(315,100%,70%)");
const headerEl2 = (document.querySelector("#header-id").style.background =
  "hsl(315,100%,70%)");
const headerEl3 = (document.querySelector(".header-class").style.background =
  "hsl(315,100%,70%)");

// Excercise 1
const counterEl = document.getElementById("counter");
let counter = 0;
function incrementByOne() {
  counter++;
  counterEl.textContent = counter;
}

// Example of Using addEventListener()

const myDiv = document.getElementById("divId");
// Pay close attention to the Syntax!
myDiv.addEventListener("mouseover", function () {
  myDiv.style.background = "hsl(201,100%,70%)";
});
// Add a mouseout event to change color to hsl yellow
myDiv.addEventListener("mouseout", function () {
  myDiv.style.background = "hsl(60,100%,70%)";
});
// Alternatively, we can create an external function like this:

function changeToYellow() {
  myDiv.style.background = "hsl(60,100%,70%)";
}
myDiv.addEventListener("mouseout", changeToYellow);

headerEl3, addEventListener("click", changeToYellow);
console.log();

const inputEl = document.getElementById("input");

inputEl.addEventListener("input", logValue1);
function logValue1(event) {
  console.log(event.target.value);
}

// Excercise 2

const inputEl2 = document.querySelector("#input-2");
const characterCounter = document.getElementById("span-2");

inputEl2.addEventListener("input", charCount);

function charCount(e) {
  console.log(e.target.value);
  characterCounter.textContent = inputEl2.value.length;
}

// Excercise 3

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addButton = document.getElementById("sum");
const result = document.getElementById("result");

addButton.addEventListener("click", logValue);

function logValue(e) {
  const sum = parseInt(num1.value) + parseInt(num2.value);
  result.textContent = `${parseInt(num1.value)} + ${parseInt(
    num2.value
  )} = ${sum}`;
}
