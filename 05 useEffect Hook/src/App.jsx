import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
  
  // pehly tw page load hony par first time chalega useEffect and component me jb jb state update hogi jb jb hamara useEffect chalta rahega 
  useEffect(()=> {
    console.log("useEffect run 1");
  })

  // sirf page load hone pr hi useEffect chalega
  useEffect(()=> {
    console.log("useEffect run 2");
  },[])

// pehly tw page load hony par first time chalega then jb tk hamary counter ki state update hoti rahegi jb tk use effect chltya rahega  
  useEffect(()=> {
    console.log("useEffect run 3");
  },[counter])


  return (
    <>
    <h1>Shahwaiz</h1>
    <h2>{count}</h2>
    <h2>{counter}</h2>
    <button onClick={()=> setCount (count + 1)}>counter one</button>
    <button onClick={()=> setCounter (counter + 1)}>counter two</button>
    </>
  )
}

export default App
