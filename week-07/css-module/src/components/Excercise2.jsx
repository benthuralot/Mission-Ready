import { useState } from "react";

function Excercise2() {
  const [showCat, setShowCat] = useState(false);
  const [showDog, setShowDog] = useState(false);
  const [showOther, setShowOther] = useState(false);

  function handleShowCat() {
    setShowCat(!showCat);
    setShowDog(false);
    setShowOther(false);
  }

  function handleShowDog() {
    setShowDog(!showDog);
    setShowCat(false);
    setShowOther(false);
  }

  function handleShowOther() {
    setShowOther(!showOther);
    setShowDog(false);
    setShowCat(false);
  }

  return (
    <div>
      {showCat && <img src="/cat-public.png" />}
      {showDog && <img src="/dog-public.jpg" />}
      {showOther && <img src="/redPanda-public.jpg" />}
      <br />
      <button onClick={handleShowCat}>Cat</button>
      <button onClick={handleShowDog}>Dog</button>
      <button onClick={handleShowOther}>Other</button>
    </div>
  );
}
export default Excercise2;
