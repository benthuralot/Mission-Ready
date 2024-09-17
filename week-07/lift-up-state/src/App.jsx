import InputComponent from "./components/InputComponent";
import ShowComponent from "./components/ShowInput";
import CounterAddOne from "./components/CounterAddOne";
import CounterMinusOne from "./components/CounterMinusOne";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const handleUserInputInApp = (e) => setInputVal(e.target.value);

  const [count, setCount] = useState(0);

  const updateCountAddOne = () => setCount(count + 1);
  const updateCountMinusOne = () => setCount(count - 1);

  // useEffect(() => {
  //   console.log(inputVal);
  // }, [inputVal]);

  return (
    <>
      <InputComponent
        handleUserInput={handleUserInputInApp}
        val={inputVal}
      ></InputComponent>
      <ShowComponent userInput={inputVal}></ShowComponent>

      <CounterAddOne
        count={count}
        updateCount={updateCountAddOne}
      ></CounterAddOne>
      <CounterMinusOne
        count={count}
        updateCount={updateCountMinusOne}
      ></CounterMinusOne>
    </>
  );
}

export default App;
