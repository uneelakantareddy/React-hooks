import React, { createContext } from 'react'
import ComponentE from './ComponentE'

export const userContext = createContext()
const UseContextHook = () => {
  return (
    <div>
      <userContext.Provider value={'hello '}>
        <ComponentE />
      </userContext.Provider>
    </div>
  )
}

export default UseContextHook
