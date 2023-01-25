import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
  const [num, setNum] = useState(1)

  const Factorial = useMemo(() => {
    let result = 1
    for (let i = 1; i <= num; i++) {
      result = result * i
    }
    return result
  }, [num])
  console.log('Factorial re-rendered')

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(event) => {
          setNum(event.target.value)
        }}
      />

      <div>
        <h1>{Factorial}</h1>
      </div>
    </div>
  )
}

export default UseMemoHook
