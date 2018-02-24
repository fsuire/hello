import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em;
`

const RegisteredUser = (props) => (
  <StyledSection className={props.className}>
    registered user
  </StyledSection>
)

export default RegisteredUser
