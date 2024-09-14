import { useState, useCallback,useMemo } from 'react'
import './App.css'

function App() {
  function App() {
    const [count, setCount] = useState(0);
    const [subtract, setSubtract] = useState(100);
  
    // useMemo
    const multiplication = useMemo(() => {
      console.log("@@@@@@@@@");
    }, []);
  
    // useCallback
    const learning = useCallback(() => {
      console.log("hello");
    },[subtract])
  
    return (
      <>
        <h1>Learning useMemo</h1>
        <h2 className="mt-4">{count}</h2>
        <Child learning={learning} />
        <br />
        <button onClick={() => setCount(count + 1)}>Addition</button>
        <h2  className="mt-4">{subtract}</h2>
        <button onClick={() => setSubtract(subtract - 1)}>Subtraction</button>
      </>
    );
  }
}  

export default App
