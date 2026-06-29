import React,{useState,useMemo} from 'react';

function UseMemoCounter(){
    const [count,setCount] = useState(0);

    const [products] = useState([
      {id:1, price:1000},
      {id:2, price:200},
      {id:3, price:300},
    ])

    const totalPrice = useMemo(() => {
      return products.reduce((sum,product) => {
        return sum + product.price
      },0)
    },[products])
    
    return(
        <>
          <h1>UseMemoCounter</h1>
          <h1>Count: {count}</h1>
          <h1>Total Price: {totalPrice}</h1>
          <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </>
    )
}

export default UseMemoCounter;