import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Car from "./components/Car.jsx";
import Person from "./components/Person.jsx";

//  run js code here or ...
function App() {
  // ... run here too
  const fruitOrder = [
    {
      name: "Apple",
      qty: 3,
      singlePrice: 0.25,
    },
    {
      name: "Mango",
      qty: 6,
      singlePrice: 0.35,
    },
    {
      name: "Banana",
      qty: 4,
      singlePrice: 0.15,
    },
  ];

  const newArray = fruitOrder.map(function (fruit, index) {
    return `${
      index + 1
    }) ${fruit["qty"]} units of ${fruit["name"]} costs \$${(fruit["singlePrice"] * fruit["qty"]).toFixed(2)}\n`;
  });
  console.log(newArray);

  const users = [
    { id: 1, name: "Sally Rogers" },
    { id: 2, name: "Buddy Sorrell" },
    { id: 3, name: "Millie Helper" },
  ];

  // Object Destructuring
  const person = {
    firstName: "Hershyl",
    lastName: "Seumanu",
  };

  const { firstName: fName, lastName: lName } = person;
  console.log(fName);
  console.log(lName);

  // An alternative example
  let { firstName, lastName } = person;
  console.log(firstName);
  console.log(lastName);

  const user = {
    id: 42,
    isVerified: true,
  };
  const { id, isVerified } = user;
  console.log(id);
  console.log(isVerified);

  // Excercise 2

  const myObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      companyName: "Romaguera-Crona",
      catchPhrase: "It's collaboration time",
      bs: "harness real-time e-markets",
    },
  };

  const {
    email,
    username,
    company: { companyName, catchPhrase },
  } = myObj;
  console.log(username);
  console.log(email);
  console.log(companyName);
  console.log(catchPhrase);

  // Array Destructuring
  const singerFromNZ = ["Lorde", "Benee", "Broods"];
  const [first, second, third] = singerFromNZ;
  console.log(first);

  let a, b;
  [a, , b] = ["Jennie", "Lisa", "Jisoo", "Rose"];
  console.log(a);
  console.log(b);

  return (
    <>
      <h1>
        <span className="trademe">Trademe</span> Motors
      </h1>
      {/* Car component in parent App.jsx components*/}
      <Car make="Tesla" year="2020" price="$64999" />
      <Car make="Toyota" year="2021" price="$46950" />
      {/* Array can be evaluated in JSX  */}
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
      <Person name="Hershyl" age="30" />
    </>
  );
}

export default App;
