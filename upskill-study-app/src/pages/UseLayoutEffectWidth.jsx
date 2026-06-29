import React,{useState,useRef,useLayoutEffect} from 'react';

function UseLayoutEffectWidth(){
    const devRef = useRef(null);
    const[width,setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(devRef.current.offsetWidth)
    },[])

    return(
        <>
          <h1>UseLayoutEffectWidth</h1>
          <div
          ref={devRef}
          style={{width:"200px", padding: "20px", border: '2px solid black'}}
          >Hello World</div>

          <h1>Width: {width}</h1>
        </>
    )
}

export default UseLayoutEffectWidth;