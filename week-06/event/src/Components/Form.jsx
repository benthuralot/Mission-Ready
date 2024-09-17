import { useState, useEffect } from "react";
// submint function
const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   change function
  const handleChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  };
  useEffect(() => {
    console.log("useEffect Trigger", inputValue);
  }, [inputValue]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
