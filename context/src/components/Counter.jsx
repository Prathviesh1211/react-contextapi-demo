import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
    const {count,setCount}=useContext(CounterContext);


  return (
    <div>
        <br />
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <span> </span>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter
