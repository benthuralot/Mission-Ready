console.log("We're live!");

// //Understanding how datatypes are referenced
// const myArray = [1, 2, 3];
// const myNewArray = myArray; // myArray is linked or referenced in memory
// myNewArray.push(4, 5, 6);
// console.log(myNewArray, myArray); // [1, 2, 3, 4, 5, 6]; [1, 2, 3, 4, 5, 6];

// const myObject = { name: "Rob", age: 50 };
// const myNewObject = myObject; // myNewObject is linked or referenced in memory
// myNewObject.age = 60;
// console.log(myNewObject, myObject); // {name: 'Rob', age: 60} {name: 'Rob', age: 60}

// // Safer way is to use the Spread Operator

// const myNewArray2 = [...myArray];
// myNewArray2.push(7, 8, 9);
// console.log(myArray, myNewArray2);

// ---- this ----

const person = {
  name: "Alice",
  sayName: function () {
    console.log(this.name); // Refers to the "person" object
  },
};
person.sayName();

function greet() {
  //console.log(this);
  console.log(`Hello ${this.firstName} ${this.lastName}`);
}
greet(); // what’s the output?
const person1 = {
  firstName: "Laura",
  lastName: "Petrie",
  hello: greet,
};
person1.hello(); // what’s the output?

// ---- classes ----

class User {
  constructor(prop1, prop2) {
    this.firstName = prop1;
    this.lastName = prop2;
  }
}
const user1 = new User("John", "Snow");
console.log(user1);
console.log(user1.firstName, user1.lastName);

// create a method inside of class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //The sayHi method is defined inside the constructor function.
    this.sayHi = function () {
      console.log(this.name + " say Hi");
    };
  }
  //The greet method is defined within the class body. preferred
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const myPerson = new Person("Hershyl", 29);
console.log(myPerson.greet());
console.log(myPerson.sayHi());

// Excercise 1

class Vehicle {
  constructor(model, manufacturer, year, colour) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.colour = colour;
  }
  myColour() {
    console.log(
      `The colour of this ${this.year} ${this.manufacturer} ${this.model} is: ${this.colour}`
    );
  }
}

const myCar = new Vehicle("Hiace", "Toyota", "2024", "black");
console.log(myCar.myColour());
