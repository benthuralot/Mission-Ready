const ArrowFunction = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };
  return (
    <>
      <h1>Arrow Function in React</h1>
      <button onClick={handleClick}>Button in Arrow Function</button>
    </>
  );
};
export default ArrowFunction;
