import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleButton from "./components/ToggleButton";
import ChangeColour from "./components/ChangeColour";

function App() {
  const [count, setCount] = useState(0);
  function incrementByOne() {
    setCount(count + 1);
    console.log(count);
  }

  const [count1, setCount1] = useState(100);
  function decrementByOne() {
    setCount1(count1 - 1);
    console.log(count1);
  }

  useEffect(() => {
    // This useEffect is triggered only when the component mounts
    console.log("Component rendered for the FIRST time only");
  }, []); // no dependencies, so nothing will cause it to trigger again

  // Updating
  useEffect(() => {
    console.log("State updated!");

    return () => {};
  }, [count]);

  return (
    <>
      <button onClick={incrementByOne}>Count is {count}</button>
      <button onClick={decrementByOne}>Count is {count1}</button>
      <ToggleButton></ToggleButton>
      <ChangeColour></ChangeColour>
    </>
  );
}

export default App;
