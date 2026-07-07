import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child component rendered");
  return <button onClick={handleClick}>Click me</button>;
});

function UseCallbacKCounter() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </>
  );
}

export default UseCallbacKCounter;
