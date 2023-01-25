import React, { useState } from 'react'
import axios from 'axios'

const ApiCalling = () => {
  const [data, setData] = useState('')
  const [showData, setShowdata] = useState(false)

  const ApiCallHandler = async () => {
    const dataArray = []

    const response = await axios.get(
      'https://freshmart-92e8c-default-rtdb.firebaseio.com/items.json',
    )
    for (let key in response.data) {
      dataArray.push({ ...response.data[key] })
    }

    setData(dataArray)
    setShowdata(true)
  }
  console.log(data)

  return (
    <div>
      <button
        onClick={() => {
          ApiCallHandler()
        }}
      >
        Get Data Button
      </button>
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

export default ApiCalling
