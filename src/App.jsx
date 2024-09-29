import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null)

  useEffect(()=>{
    if(isRunning){
      intervalRef.current = setInterval(()=>{
        setCount(prevCount => prevCount + 1)
      },1000)
    }
    return ()=> clearInterval(intervalRef.current)
  },[isRunning])

  const handleStart = ()=>{
    setIsRunning(true)
  }

  const handleStop =()=>{
    setIsRunning(false);
    clearInterval(intervalRef.current)
  }

  const handleReset = ()=>{
    setIsRunning(false);
    clearInterval(intervalRef.current)
    setCount(0)
  }

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <p>{count}</p>
    </>
  )
}

export default App



