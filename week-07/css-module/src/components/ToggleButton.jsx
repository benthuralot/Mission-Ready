import { useState, useEffect } from "react";

function ToggleButton() {
  //Declare the state variable isOn with an initial value of true
  const [isOn, setIsOn] = useState(true);
  //Declare the state variable renderMessage with an initial value - "Toggle Button is on!"
  const [renderMessage, setRenderMessage] = useState("Toggle Button is on!");
  // Add an event handler to toggle the isOn state
  function handleClick() {
    setIsOn(!isOn);
  }
  //Side effect when isOn state changes, renderMessage changes too.
  useEffect(() => {
    if (isOn) {
      setRenderMessage("Toggle Button is on!");
    } else {
      setRenderMessage("Toggle Button is off!");
    }
  }, [isOn]);

  return (
    <div className="toggle-button">
      <button onClick={handleClick}>Toggle Button</button>
      {/* {isOn ? "ON" : "OFF"} */}
      {/* <p>{renderMessage}</p> */}

      {/* Using Ternary Operator Here⬇️ */}
      {isOn ? (
        <p style={{ color: "green" }}>Toggle Button is on!</p>
      ) : (
        <p style={{ color: "red" }}>Toggle Button is off!</p>
      )}
    </div>
  );
}
export default ToggleButton;
