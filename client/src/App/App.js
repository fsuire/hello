import React, { Component } from 'react';
import styled from 'styled-components'

import { separator } from '/app/src/style/mixins'
import { colors } from '/app/src/style/theme'


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

class App extends Component {
  render() {
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
          </main>        
        </div>
      </StyledDiv>
    )
  }
}

export default App
