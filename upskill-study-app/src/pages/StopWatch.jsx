import React,{useState, useEffect, useRef} from "react";

function StopWatch(){
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
    const start = () => {
        if(intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        },1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const reset = () => {
        stop();
        setSeconds(0);
    }

    return(
        <>
        <h1>StopWatch</h1>

        <h1>{seconds}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default StopWatch;