import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/reducer/counterSlice";

function Counter() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );    
}

export default Counter;
