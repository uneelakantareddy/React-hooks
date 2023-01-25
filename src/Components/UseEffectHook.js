import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectHook = () => {
  const [data, setData] = useState(null)
  const [showData, setShowdata] = useState(false)

  useEffect(() => {
    let dataArray = []
    ;(async () => {
      const response = await axios.get(
        'https://freshmart-92e8c-default-rtdb.firebaseio.com/items.json',
      )
      for (let key in response.data) {
        dataArray.push({ ...response.data[key] })
      }
      setData(dataArray)
      setShowdata(true)
    })().catch(console.error)
    return () => {}
  }, [])
  console.log(data)

  return (
    <div>
      {showData && (
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}
export default UseEffectHook
