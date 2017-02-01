import React from 'react'
import bar from '../../data/components/bar'
import styled from 'styled-components'

const Abar = styled.div`
  display: inline-block;
  width: 200px;
  padding: 5px;
  background: black;
`

export default function Bar () {
  return <h1><Abar>{bar.title}</Abar></h1>
}
