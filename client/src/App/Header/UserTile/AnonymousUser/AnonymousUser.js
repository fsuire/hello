import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em;
`

const AnonymousUser = (props) => (
  <StyledSection className={props.className}>
    <div>anonymous</div>
    <button onClick={props.onDisplayLogInComponent}>Sign in</button>
  </StyledSection>
)

export default AnonymousUser
