import { useState } from "react";
import { useEffect } from "react";
function ChangeColour() {
  const [colour, setColour] = useState("red");

  const changeColour = () => {
    //console.log("change colour clicked");
    switch (colour) {
      case "red":
        setColour("blue");
        break;
      case "blue":
        setColour("green");
        break;
      case "green":
        setColour("orange");
        break;
      case "orange":
        setColour("yellow");
        break;
      default:
        setColour("red");
    }
  };

  useEffect(() => {
    console.log(`Colour of the H1 tag has changed to ${colour}`);
  }, [colour]);

  return (
    <div>
      <h1 style={{ background: colour }}>
        This element is going to change colour
      </h1>
      <button onClick={changeColour}>Change colour</button>
    </div>
  );
}
export default ChangeColour;
