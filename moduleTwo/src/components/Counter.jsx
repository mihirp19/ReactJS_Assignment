import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const incerement = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={incerement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
