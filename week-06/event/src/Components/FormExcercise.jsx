import { useState, useEffect } from "react";
// submint function
const FormExcercise = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // First Solution
    // const newList = [...inputList, inputValue];
    // newArray.push(inputValue);
    // setInputList(newList);

    // Second Solution
    setInputList((prevState) => {
      return [...prevState, inputValue];
    });

    //setDisplayValue(inputValue);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue, inputList]);

  return (
    <div>
      <h2>Form Excercise</h2>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul style={{ listStyleType: "none" }}>
        {inputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default FormExcercise;
