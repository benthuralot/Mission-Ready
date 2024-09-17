import { useState } from "react";
function ToggleButton3() {
  const [showContent, setShowContent] = useState(false);
  function changeContent() {
    setShowContent(!showContent);
  }
  return (
    <div>
      {/* If showContent is true, it renders the <p> element; 
 otherwise, it renders nothing.*/}
      <div>{showContent && <p>Congrats you found the hidden content</p>}</div>
      <button onClick={changeContent}>Click</button>
    </div>
  );
}
export default ToggleButton3;
