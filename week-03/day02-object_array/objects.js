console.group("Hello World");

const fido = {
  name: "Fido",
  weight: 40,
  breed: "Mixed",
  loves: ["walks", "Fetching balls"],
};

console.log(fido);

const myCat = {
  name: "Sir Cheeks-A-Lot",
  weight: 40,
  breed: "Persian Cat Breed",
  loves: ["sleeping", "eating"],
  favouriteFood: "Full Cream Milk",
  "home address": "Kensington",
};

console.log(myCat);

console.log(
  `This is my cat ${myCat.name}, and his favourite food is ${myCat.favouriteFood}!`
);

console.log(myCat["breed"]);

const property = "name";
const hero = {
  name: "Batman",
};
hero["name"]; // => 'Batman'
hero[property]; // => 'Batman'

console.log(hero[property]);

// Excercise 3
let length = "length";
let width = "width";
const rectangle = {
  length: 10,
  width: 50,
};
const area = rectangle[length] * rectangle[width];
console.log(`The area of a rectangle is ${area}`);

// Modify the value of a property
const person = {
  firstName: "John",
  lastName: "Doe",
};
person.firstName = "Jane";
console.log(person);

// Adding/Removing an object property
person.car = "Toyota";
console.log(person);
// Delete
delete person.lastName;
console.log(person);

// Excercise 4

const newPerson = {
  firstName: "John",
  lastName: "Doe",
  favouriteNumber: 6,
  favouriteDay: "Friday",
};
console.log(newPerson);
// Add a property called favouriteFood to the object.
newPerson.favouriteFood = "Butter Chicken";
// Log the object to the console
console.log(newPerson);
// Remove the favouriteDay property from the object.
delete newPerson.favouriteDay;
//  Change the value of the favouriteNumber property by
// doubling the current number value.
newPerson.favouriteNumber = newPerson["favouriteNumber"] * 2;
console.log(newPerson);
