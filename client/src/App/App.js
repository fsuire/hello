import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

import { separator } from '/app/src/style/mixins'
import defaultStyles from '/app/src/style/mixins/defaultStyles'

import { getServerMessage } from '/app/src/ServerMessage/selectors'
import { fetchServerMessage } from '/app/src/ServerMessage/sideEffects'

import Header from './Header'


const StyledDiv = styled.div`
  ${defaultStyles()}

  > .page-content {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    > nav {
      padding-left: .5em;
      padding-right: .5em;
      ${separator('right')}
    }

    > main {
      flex-grow: 1;
      padding-left: .5em;
      padding-right: .5em;
    }
  }
`

export class App extends Component {
  componentDidMount() {
    this.props.fetchServerMessage()
  }

  render() {
    const { serverMessage } = this.props
    return (
      <StyledDiv>
        <Header />
        <div className="page-content">
          <nav>
            <h2>nav</h2>
          </nav>
          <main>
          <h2>main</h2>
          <p>
            server message: {serverMessage}
          </p>
          </main>
        </div>
        <ReactTooltip />
      </StyledDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  serverMessage: getServerMessage(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchServerMessage: fetchServerMessage(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
