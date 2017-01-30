import React from 'react'
import Nav from './components/Nav'

export default function App ({children}) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
