import React, { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext, CounterProvider } from './context/Counter'

const App = () => {
  const {count}=useContext(CounterContext);
  
  return (
      <div>
      <h1>CONTEXT API</h1>
      <h3>Count is : <span>{count}</span></h3>
      <Counter/>
      <Counter/>
    </div>
  
  )
}

export default App
