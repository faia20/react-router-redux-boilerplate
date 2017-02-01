import React from 'react'
import { Link } from 'react-router'
import nav from '../../data/components/nav'
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
        <StyledLink to={nav.homeLink.route}>{nav.homeLink.text}</StyledLink>
        {' '}
        <StyledLink to={nav.fooLink.route}>{nav.fooLink.text}</StyledLink>
        {' '}
        <StyledLink to={nav.testLink.route}>{nav.testLink.text}</StyledLink>
        {' '}
        <StyledLink to={nav.barLink.route}>{nav.barLink.text}</StyledLink>
      </NavBar>
    </header>
  )
}
