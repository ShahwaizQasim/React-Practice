// import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react';
import { toggleDarkMode } from './features/counter/darkmodeSlice';

function App() {

  const [counts, setCounts] = useState(0)

  const count = useSelector((state) => state.counter.value);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleIncrease() {
    dispatch(incrementByAmount(Number(counts)));
  }

  function handleDarkMode() {
    dispatch(toggleDarkMode());
  }

  return (
    <div className={`${darkMode ? 'container-dark' : 'container-light'}`}>
      <h1> Counter App</h1>
      <h2>Count : {count}</h2>
      <button style={{
        border: '2px solid #ccc',
        margin: '10px'
      }} onClick={handleIncrement}>+</button>
      <button style={{
        border: '2px solid #ccc',
        margin: '10px'
      }} onClick={handleDecrement}>-</button>
      <button style={{
        border: '2px solid #ccc',
        margin: '10px'
      }} onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type="text" value={counts} onChange={(e) => setCounts(e.target.value)} style={{
        height: '40px',
        border: '2px solid #ccc',
        margin: '10px'
      }} />
      <button style={{
        border: '2px solid #ccc',
        margin: '10px'
      }} onClick={handleIncrease}>Inc by Count Value</button>
      <br />
      <button style={{
        marginTop: '29px',
        border: '2px solid #ccc'
      }} onClick={handleDarkMode} >{darkMode ? "Dark Mode" : "Light Mode"}</button>
    </div>

  )
}

export default App
