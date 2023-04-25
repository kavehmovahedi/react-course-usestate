import React, { useEffect, useRef, useState, useContext } from 'react'
import './App.css'

function App() {
  const getLastCount = () => {
    // API Call
    console.log('Reading API...')
    return 5
  }

  const [count, setCount] = useState( getLastCount() )
  const [totalPrice, setTotalPrice] = useState( count * 5 )

  const updatePrice = (e) => {
    setCount(e.target.value)
    setTotalPrice(count * 5)
  }
  
  return(
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <h2>Bread Price: 5TL</h2>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        <label>How many do you need?</label>
        <input type='number' value={count} onChange={updatePrice} />
      </div>

      <p>Total Price: {totalPrice}</p>
    </div>
  )
}

export default App