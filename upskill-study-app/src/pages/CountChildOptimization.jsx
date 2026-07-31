import React from 'react';

const CountChildOptimization = React.memo(({handleClick}) => {
    console.log("Child Rendered");

    return(
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
})

export default CountChildOptimization;