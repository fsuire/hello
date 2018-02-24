import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'
import { getCurrentUser } from '/app/src/CurrentUser/selectors'
import { updateCurrentUser } from '/app/src/CurrentUser/sideEffects'

import AnonymousUser from './AnonymousUser'
import RegisteredUser from './RegisteredUser'
import LogIn from './LogIn'

const ANIMATION_DURATION = 250

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  > div {
    display: flex;
    flex-direction: row;

    > div {
      overflow: hidden
      width: 200px;
      height: 100%;

      > section {
        width: 200px;
        height: 100%;
      }
    }

    > .login-animation-enter {
      width: 0px;
    }
    > .login-animation-enter.login-animation-enter-active {
      width: 200px;
      transition: width ${ANIMATION_DURATION}ms ease;
    }
    > .login-animation-leave {
      width: 200px;
    }
    > .login-animation-leave.login-animation-leave-active {
      width: 0px;
      transition: width ${ANIMATION_DURATION}ms ease;
    }

    > .anonymous-user { order: 0; }
    > .registered-user { order: 1; }
    > .log-in { order: 2; }
  }
`

export class UserTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.initialComponentDisplayState,
      shouldTryGoogle: true,
    }
  }

  initialComponentDisplayState = {
    isAnonymousUserComponentDisplayed: this.props.currentUser.type === ACCOUNT_TYPE.ANONYMOUS,
    isRegisteredUserComponentDisplayed: this.props.currentUser.type !== ACCOUNT_TYPE.ANONYMOUS,
    isLogInComponentDisplayed: false,
  }

  render() {
    return (
      <StyledDiv>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="login-animation"
        transitionEnterTimeout={ANIMATION_DURATION}
        transitionLeaveTimeout={ANIMATION_DURATION}
      >
        {this.makeDisplayedComponent()}
      </ReactCSSTransitionGroup>
      </StyledDiv>
    )
  }

  makeDisplayedComponent = () => {
    if(this.state.isAnonymousUserComponentDisplayed) {
      return (<div key="anonymous-user" className="anonymous-user">
        <AnonymousUser
          onDisplayLogInComponent={this.displayLoginComponent}
        />
      </div>)
    }

    if(this.state.isRegisteredUserComponentDisplayed) {
      return (<div key="registered-user" className="registered-user">
        <RegisteredUser/>
      </div>)
    }

    return (<div key="log-in" className="log-in">
      <LogIn
        onLogIn={this.handleLogIn}
        onCancel={this.displayInitialComponent}
        shouldTryGoogle={this.state.shouldTryGoogle}
        onGoogleFailure={() => {
          this.setState({
            ...this.state,
            shouldTryGoogle: false
          })
        }}
      />
    </div>)
  }

  displayLoginComponent = () => this.setState({
    ...this.state,
    isAnonymousUserComponentDisplayed: false,
    isRegisteredUserComponentDisplayed: false,
    isLogInComponentDisplayed: true,
  })

  displayInitialComponent = () => this.setState({
    ...this.state,
    ...this.initialComponentDisplayState
  })

  handleLogIn = (response, accountType) => {
    switch(accountType) {
      case ACCOUNT_TYPE.GOOGLE:
         // @TODO update the current player with the response
      default:
        console.warn(`Succes while signing in an account of the type "${accountType}, but nothing is implemented to update the current user`)
        break;
    }
    // this.props.updateCurrentUser(response, accountType)
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUser: updateCurrentUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserTile)
