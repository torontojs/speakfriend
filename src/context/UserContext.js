import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [loggedIn, toggleLoggedin] = useState(true)
  return (
    <UserContext.Provider value={[loggedIn, toggleLoggedin]}>
      {props.children}
    </UserContext.Provider>
  )
}
