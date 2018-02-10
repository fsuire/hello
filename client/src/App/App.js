import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { separator } from '/app/src/style/mixins'
import { colors } from '/app/src/style/theme'

import { getServerMessage } from '/app/src/selectors'
import { fetchServerMessage } from '/app/src/sideEffects'


const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  color: ${colors.dark.neutral};

  > header {
    color: white;
    background-color: ${colors.primary};
    padding-left: .5em;
    padding-right: .5em;
  }

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
        <header>
          <h1>Hello</h1>
          <h2>page title</h2>
        </header>
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

