import { useState } from 'react'
import './index.css'
import './App.css'
import Button from './components/button'

function App() {

  return (
    <>
     <h1 className="text-4xl font-bold underline">
      Hello world!
    </h1>
    <h2 className='text-4xl bg-gray-400 rounded-md'>hello</h2>
    <Button label="Home" />
    <Button bgColor={'bg-red-400'} label="About" />
    <Button label="Contact" />
    <Button label="Products" />
    </>
  )
}

export default App
