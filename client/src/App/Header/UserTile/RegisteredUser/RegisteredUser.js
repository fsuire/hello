import React from 'react'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'
import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'

import Facebook from './Facebook'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.primary};
`

const RegisteredUser = (props) => {
  switch(props.type) {
    case ACCOUNT_TYPE.FACEBOOK:
      return (<Facebook onLogOut={props.onLogOut} />)
    default:
      return (<StyledSection></StyledSection>)
  }
}

export default RegisteredUser
