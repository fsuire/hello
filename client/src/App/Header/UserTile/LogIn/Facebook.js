import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'
import { getCurrentUser } from '/app/src/CurrentUser/selectors'
import { updateCurrentUser } from '/app/src/CurrentUser/sideEffects'

import * as facebook from '../utils/facebook'

export class Facebook extends Component {

  TOOLTIP_MESSAGES = {
    SERVICE_UNAVAILABLE: 'Cannot sign in with Facebook right now'
  }

  render() {
    const { disabled } = this.props
    const label = 'With Facebook'

    if(disabled) {
      return (
        <button
          data-tip={this.TOOLTIP_MESSAGES.SERVICE_UNAVAILABLE}
          disabled
        >
          {label}
        </button>
      )
    }

    return (<button onClick={this.handleLogIn}>{label}</button>)
  }

  handleLogIn = async () => {
    const response = await facebook.login()
    this.props.updateCurrentUser(response, ACCOUNT_TYPE.FACEBOOK)
    this.props.onLogIn()
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUser: updateCurrentUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
