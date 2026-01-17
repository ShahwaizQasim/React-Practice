import React from 'react'

const Card = ({setName}) => {
  return (
    <>
    <h1 className='text-4xl font-bold mt-8'>Lifting State Up</h1>
    <input type="text" onChange={(e)=> setName(e.target.value)} style={{
        border: '1px solid black',
        marginBlock:'10px'
    }} />
    </>
  )
}

export default Card