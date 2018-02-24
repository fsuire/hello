import React, { Component } from 'react'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'

import Google from './Google'
import Facebook from './Facebook'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em;
  background-color: ${colors.secondary};

  footer {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;

    > button {
      margin-top: auto;
    }
  }
`

export default class LogIn extends Component {
  render() {
    return (
      <StyledSection className={this.props.className}>
        <div>Sign in</div>
        <Google disabled={true} />
        <Facebook />
        <footer>
          <button
            className="tiny-button"
            onClick={this.props.onCancel}
          >Cancel</button>
        </footer>
      </StyledSection>
    )
  }
}
