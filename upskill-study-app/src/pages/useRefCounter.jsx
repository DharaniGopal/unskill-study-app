import { useState, useEffect, useRef } from "react";

function UseRefCounter() {
  const [count, setCount] = useState(0);

  const previousCount = useRef();

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <h1>UseRefCounter</h1>
      <h1>count: {count}</h1>
      <h1>PreviousCount:{previousCount.current}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default UseRefCounter;
