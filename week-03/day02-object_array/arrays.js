// Arrays | Excercise 1

const favFood = ["Taro", "Luau", "Ulu", "Miki"];
console.log(favFood);

// Excercise 2

const numbers = [5, 6, 7, 8, 9, 10];
let sum =
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
const average = sum / numbers.length;
console.log(average);

// Array push() Method

const pokeballs = ["pikachu", "jiggly puff", "ditto"];
pokeballs.push("kirby"); // Adds Kirby to the end of the Array
// ["pikachu", "jiggly puff", "ditto", "kirby"]
console.log(pokeballs);

// Array of Other Data Types

const arrayOfNumbersBooleansStrings = [3, 3, true, 6, false, true, "1", 6];
const arrayOfObjects = [
  {
    name: "Buddy",
    favColour: "blue",
  },
  {
    name: "Sally",
    favColour: "purple",
  },
];

console.log(arrayOfObjects[0].name); // Buddy
console.log(arrayOfObjects[0]["name"]); // Buddy
console.log(arrayOfObjects[0]); // Object

console.log(arrayOfObjects[1].name); // Sally
console.log(arrayOfObjects[1]); // Object
console.log(arrayOfObjects[1].favColour); // Purple

// Excercise 3

const favRecipe = {
  title: "Marmite Sandwich",
  servings: 5,
  ingredients: ["marmite", "butter", "bread", "chips"],
};

console.log(favRecipe); // Object
console.log(favRecipe.ingredients.length); // Number of ingredients
console.log(favRecipe.ingredients); // Array of ingredients
favRecipe.ingredients.push("drink"); // Push another ingredient
console.log(favRecipe.ingredients); // Array with new ingredient

// Other Methods

// let pushMethod = iceCreams.push("rainbow");
// //adds the item to the end, returns new length.
// //pushMethod === 4;
// //["vanilla", "chocolate", "blueberry", "rainbow"]
// let popMethod = iceCreams.pop();
// //removes and returns last item.
// //popMethod === "rainbow".
// // ["vanilla", "chocolate", "blueberry"]
// let unshiftMethod = iceCreams.unshift("tiramisu");
// //adds the item at the beginning, returns new length.
// //unshiftMethod === 4;
// //["tiramisu", "vanilla", "chocolate", "blueberry"]
// let shiftMethod = iceCreams.shift();
// //removes and returns first item.
// //shiftMethod === "tiramisu".
// //["vanilla", "chocolate", "blueberry"]
