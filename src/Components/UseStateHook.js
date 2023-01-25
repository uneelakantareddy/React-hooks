import React, { useState } from 'react'

const UseStateHook = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Counter Incrementer
      </button>
      <p style={{ marginleft: '50px' }}>{count}</p>
    </div>
  )
}
export default UseStateHook
