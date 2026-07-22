import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)}

    const reduce = () => {
    setCount(count - 1)}
  
  
  return(
    <>
    <h1>Counter Machine</h1>
    <h2> Counter Value: {count} </h2>

    <button 
    onClick={addValue}>
      Add value 
    </button>
    <br />
    <button 
    onClick={reduce}>
      Reduce value 
    </button>

    </>

  )
}

export default App
