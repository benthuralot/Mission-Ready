import { useState } from "react";

function ToggleButton() {
  // Create state variable
  const [isON, setIsOn] = useState(true);
  // click function
  function handleClick() {
    console.log("clicked");
    setIsOn(!isON);
    console.log(isON);
  }
  return (
    <div>
      <button onClick={handleClick}>{isON ? "ON" : "OFF"}</button>
    </div>
  );
}
export default ToggleButton;
