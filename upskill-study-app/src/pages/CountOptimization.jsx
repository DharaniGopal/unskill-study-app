import React,{useState, useEffect, useCallback} from 'react';
import CountChildOptimization from './CountChildOptimization';

function CountOptimization() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() =>{
        console.log("Child Clicked")
    },[])

    return(
        <>
            <h1>Count Optimization</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>

            <CountChildOptimization handleClick={handleClick} />
        </>
    )
}

export default CountOptimization;