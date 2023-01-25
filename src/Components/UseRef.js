import React, { useState, useRef } from 'react'
import { useEffect } from 'react'

const UseRef = () => {
  const [input, setInput] = useState(null)
  const count = useRef(0)
  const focus = useRef(null)

  useEffect(() => {
    count.current = count.current + 1
  })
  return (
    <div>
      <input
        ref={focus}
        type="number"
        onChange={(event) => {
          setInput(event.target.value)
        }}
        autoFocus
      />
      <p>{input}</p>
      <button
        onClick={() => {
          focus.current.focus()
        }}
      >
        focus input
      </button>
      <h1>Reder Count:{count.current}</h1>
    </div>
  )
}

export default UseRef
