import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from './context/UserContext'

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root'),
)
