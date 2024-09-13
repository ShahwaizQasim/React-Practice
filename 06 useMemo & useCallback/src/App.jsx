import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [subtract, setSubtract] = useState(100);

  // useMemo
  const multiplication = useMemo(() => {
    console.log("@@@@@@@@@");
    return count * 10;
  }, []);

  return (
    <>
      <h1>Learning useMemo</h1>
      <h2>{count}</h2>
      {multiplication}
      <br />
      <button onClick={() => setCount(count + 1)}>Addition</button>
      <h2>{subtract}</h2>
      <button onClick={() => setSubtract(subtract - 1)}>Subtraction</button>
    </>
  );``
}

export default App
