import React from 'react'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'

const StyledHeader = styled.header`
  color: white;
  background-color: ${colors.primary};
  padding-left: .5em;
  padding-right: .5em;
`

export default (props) => (
  <StyledHeader>
    <h1>Hello</h1>
    <h2>page title</h2>
  </StyledHeader>
)