import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { colors } from '/app/src/style/theme'
import { ACCOUNT_TYPE } from '/app/src/CurrentUser/constants'
import { getCurrentUser } from '/app/src/CurrentUser/selectors'
import { updateCurrentUser } from '/app/src/CurrentUser/sideEffects'

import * as facebook from '../utils/facebook'

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em;
  background-color: ${colors.primary};
`

export class Facebook extends Component {
  render() {
    const label = 'Sign out'

    return (<StyledDiv>
      {this.props.currentUser.name}
      <button onClick={this.handleLogOut}>{label}</button>
    </StyledDiv>)
  }

  handleLogOut = async () => {
    await facebook.logout()
    await this.props.updateCurrentUser({ type: ACCOUNT_TYPE.ANONYMOUS })
    this.props.onLogOut()
  }
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUser: updateCurrentUser(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
