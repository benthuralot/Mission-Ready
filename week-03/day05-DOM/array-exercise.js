console.log("connected");

const array = [5, 6, 7, 8, 9, 10];
let sum = 0;

for (i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

const myPet = {
  name: "Rowdy Roddy Piper",
  weight: 20,
  breed: "Rottweiler",
  loves: ["to be rowdy", "sleeping", "eating"],
};

console.log(`${myPet.name} loves ${myPet.loves[0]}`);

// Excercise 1

const myArray = [];
myArray.push("Auckland");
myArray.push("Wellington");
myArray.push("Queenstown");
myArray.push("Christchurch");
myArray.push("Napier");

const arrayLength = myArray.length;
console.log(myArray.length);
console.log(myArray[2]);
const deletedCity = myArray.pop(myArray[arrayLength]);
console.log(myArray);
console.log(deletedCity);
console.log(myArray.indexOf("Napier"));

// Excercise 2

const person = {
  name: "Hershyl",
  age: 29,
  cities: ["Auckland", "Seoul", "Sydney", "Apia", "Las Vegas"],
};
console.log(person, person.cities.length);
person.cities.push("Los Angeles");
console.log(person.cities);
