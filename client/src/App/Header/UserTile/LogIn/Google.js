import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import ReactTooltip from 'react-tooltip'

import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'

export default class Google extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoogleLoginAvailable: false
    }
  }

  TOOLTIP_MESSAGES = {
    TRY_SERVICE_AVAILABILITY: 'Verifying sign in with Google',
    SERVICE_UNAVAILABLE: 'Cannot sign in with Google right now'
  }

  getTooltipMessage = () => this.props.shouldTryGoogle
    ? this.TOOLTIP_MESSAGES.TRY_SERVICE_AVAILABILITY
    : this.TOOLTIP_MESSAGES.SERVICE_UNAVAILABLE

  render() {
    const { onLogIn, disabled } = this.props
    const label = 'With Google'

    if(disabled) {
      return (
        <button data-tip={this.getTooltipMessage()} disabled>{label}</button>
      )
    }

    const GoogleButton = () => (<GoogleLogin
      clientId="713566423116-arcsqc95r6eumeh2i9g6a2crouub0i4l.apps.googleusercontent.com "
      buttonText="With Google"
      onSuccess={(response) => onLogIn(response, ACCOUNT_TYPE.GOOGLE)}
      onFailure={() => console.error('Google sign in failure')}
      style={{}}
    />)

    let WrappedGoogleButton = (<div><GoogleButton /></div>)
    if(!this.state.isGoogleLoginAvailable) {
      WrappedGoogleButton = (<div data-tip={this.getTooltipMessage()}><GoogleButton /></div>)
    }

    return WrappedGoogleButton
  }

  componentDidMount() {
    ReactTooltip.rebuild()
  }
}
