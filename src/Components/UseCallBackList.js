import React, { useEffect, useState } from 'react'

const UseCallBackList = ({ getItems }) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getItems())
    console.log('updating items')
  }, [getItems])
  return items.map((item, index) => <div key={index}>{item}</div>)
}

export default UseCallBackList
