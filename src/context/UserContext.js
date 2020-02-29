import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [loggedIn, toggleLoggedIn] = useState(false)
  return (
    <UserContext.Provider value={[loggedIn, toggleLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  )
}
