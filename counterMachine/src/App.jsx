import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if (count < 10) setCount(count + 1)
    if (count >= 10) alert("Karlo bhai, 10 se zyada nahi ho sakta")
  }

    const reduce = () => {
    if(count > 0) setCount(count - 1)
    if(count <= 0) alert("Karlo bhai, 0 se kam nahi ho sakta") 
  }

   
  
  
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
