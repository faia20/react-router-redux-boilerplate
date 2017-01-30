import React from 'react'
import { Link } from 'react-router'

export default function Nav () {
  return (
    <header>
      Links:
      {' '}
      <Link to='/'>Home</Link>
      {' '}
      <Link to='/foo'>Foo</Link>
      {' '}
      <Link to='/test'>Test</Link>
      {' '}
      <Link to='/bar'>Bar</Link>
    </header>
  )
}
