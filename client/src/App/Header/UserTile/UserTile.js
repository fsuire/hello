import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'

import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'
import { getCurrentUser } from '/app/src/CurrentUser/selectors'

import * as facebook from './utils/facebook'

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

    > .registered-user { order: 0; }
    > .anonymous-user { order: 1; }
    > .log-in { order: 2; }
  }
`

export class UserTile extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.getInitialComponentDisplayState() }
  }

  render() {
    console.log('render !!!', this.props.currentUser, this.state)
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

  async componentDidMount() {
    try {
      const loginStatus = await facebook.getLoginStatus()
    } catch(e) {}
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
        <RegisteredUser
          type={this.props.currentUser.type}
          onLogOut={this.displayInitialComponent}
        />
      </div>)
    }

    return (<div key="log-in" className="log-in">
      <LogIn
        onExitLogIn={this.displayInitialComponent}
      />
    </div>)
  }

  displayLoginComponent = () => this.setState({
    ...this.state,
    isAnonymousUserComponentDisplayed: false,
    isRegisteredUserComponentDisplayed: false,
    isLogInComponentDisplayed: true,
  })

  displayInitialComponent = () => {
    this.setState({
      ...this.state,
      ...this.getInitialComponentDisplayState()
    })
}

  getInitialComponentDisplayState = () => ({
    isAnonymousUserComponentDisplayed: this.props.currentUser.type === ACCOUNT_TYPE.ANONYMOUS,
    isRegisteredUserComponentDisplayed: this.props.currentUser.type !== ACCOUNT_TYPE.ANONYMOUS,
    isLogInComponentDisplayed: false,
  })
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps)(UserTile)
