import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import GoogleLogin from 'react-google-login'

import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'
import { getCurrentUser } from '/app/src/CurrentUser/selectors'
import { updateCurrentUser } from '/app/src/CurrentUser/sideEffects'

const StyledDiv = styled.div`
`

export class UserTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.currentUser.type !== ACCOUNT_TYPE.ANONYMOUS
    }
  }

  handleGoogleResponse = (response) => {
    this.props.updateCurrentUser(response, ACCOUNT_TYPE.GOOGLE)
  }

  render() {
    const { currentUser } = this.props
    const isLoggedIn = currentUser.type !== ACCOUNT_TYPE.ANONYMOUS
    return (
      <StyledDiv>
        {!this.state.isLoggedIn && (
          <div>Anonymous</div>)}
        <GoogleLogin
          clientId="713566423116-ehahqn0p1sphuln3r1jk66gr2d3ttl6d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.handleGoogleResponse}
          onFailure={this.handleGoogleResponse}
          style={{}}
        />
      </StyledDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUser: updateCurrentUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserTile)