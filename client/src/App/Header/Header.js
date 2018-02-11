import React from 'react'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'

import UserTile from './UserTile'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  background-color: ${colors.primary};
  padding-left: .5em;
  padding-right: .5em;

  > div:first-child {
    flex-grow: 1;
  }
`

export default (props) => (
  <StyledHeader>
    <div>
      <h1>Hello</h1>
      <h2>page title</h2>
    </div>
    <UserTile />
  </StyledHeader>
)