import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const NavBar = styled.div`
  background: grey;
  font-size: 1.3em;
`

const StyledLink = styled(Link)`
  color: white;
`

export default function Nav () {
  return (
    <header>
      <NavBar>
        Links:
        {' '}
        <StyledLink to='/'>Home</StyledLink>
        {' '}
        <StyledLink to='/foo'>Foo</StyledLink>
        {' '}
        <StyledLink to='/test'>Test</StyledLink>
        {' '}
        <StyledLink to='/bar'>Bar</StyledLink>
      </NavBar>
    </header>
  )
}
