import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'
import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'

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
  constructor(props) {
    super(props)
    this.state = {
      isGoogleLoginAvailable: false
    }
  }

  GOOGLE_TOOLTIP_TRY_SERVICE_AVAILABILITY_MESSAGE = 'Verifying sign in with Google'
  GOOGLE_TOOLTIP_SERVICE_UNAVAILABLE_MESSAGE = 'Cannot sign in with Google right now'

  makeGoogleButton = () => {
    const { onLogIn, shouldTryGoogle, onGoogleFailure } = this.props
    const label = 'With Google'

    if(!shouldTryGoogle) {
      return (<div data-tip={this.getGoogleTooltipMessage()}>
        <button disabled>{label}</button>
      </div>)
    }

    const GoogleButton = () => (<GoogleLogin
      clientId="713566423116-arcsqc95r6eumeh2i9g6a2crouub0i4l.apps.googleusercontent.com "
      buttonText="With Google"
      onSuccess={(response) => onLogIn(response, ACCOUNT_TYPE.GOOGLE)}
      onFailure={onGoogleFailure}
      style={{}}
    />)

    let WrappedGoogleButton = (<div><GoogleButton /></div>)
    if(!this.state.isGoogleLoginAvailable) {
      WrappedGoogleButton = (<div data-tip={this.getGoogleTooltipMessage()}><GoogleButton /></div>)
    }

    return WrappedGoogleButton
  }

  getGoogleTooltipMessage = () => this.props.shouldTryGoogle
    ? this.GOOGLE_TOOLTIP_TRY_SERVICE_AVAILABILITY_MESSAGE
    : this.GOOGLE_TOOLTIP_SERVICE_UNAVAILABLE_MESSAGE

  render() {
    return (
      <StyledSection className={this.props.className}>
        <div>Sign in</div>
        {this.makeGoogleButton()}
        <footer>
          <button
            className="tiny-button"
            onClick={this.props.onCancel}
          >Cancel</button>
        </footer>
      </StyledSection>
    )
  }

  componentDidMount() {
    ReactTooltip.rebuild()
  }
}
