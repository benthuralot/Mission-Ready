import ArrowFunction from "./Components/ArrowFunction";
import Form from "./Components/Form";
import FormExcercise from "./Components/FormExcercise";
import "./App.css";

function App() {
  function handleClick() {
    console.log("Button Clicked!");
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <ArrowFunction></ArrowFunction>
      {/* <Form></Form> */}
      <FormExcercise></FormExcercise>
    </>
  );
}

export default App;
