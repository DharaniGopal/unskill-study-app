import React, { useState} from "react";

function Toggle() {
   const[toggle,setToggle] = useState(true);
    return(
        <>
            <h1>Toggle App</h1>
            <h1>{toggle? "ON" : "Off"}</h1>
            <button onClick={() => setToggle(!toggle)}>{toggle? "Off" : "ON" }</button>
        </>
    )
}

export default Toggle;