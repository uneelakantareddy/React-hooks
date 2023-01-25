import React, { useContext } from 'react'
import { userContext } from './UseContextHook'

const ComponentE = () => {
  const user = useContext(userContext)
  return <div>{user}</div>
}

export default ComponentE
