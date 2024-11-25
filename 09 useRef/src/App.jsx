import { useRef, useState } from "react"

// What is useRef => iski help se hum DOM ko direct manipulate kar sakte hain

function App() {
  const [name, setName] = useState("Shahwaiz");
  // console.log(name);

  const refInputElement = useRef("");
  console.log(refInputElement);

  const onReset = () => {
    setName("")
    refInputElement.current.focus()
  }
  const handleInput = () => {
    refInputElement.current.style.color = "green"
    refInputElement.current.value = "yellow"
  }

  return (
    <>
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>Learning UseRef</h1>
        <input type="text" ref={refInputElement} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onReset} style={{
          marginTop: '20px'
        }}>Reset</button>
        <button onClick={handleInput} style={{
          marginTop: '20px'
        }}>Handle Input</button>
      </div>
    </>
  )
}

export default App
