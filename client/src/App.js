import React, { Component } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  & {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  > .page-content {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    
    > main {
      flex-grow: 1;
    }
  }
`

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <header>
          <h1>main title</h1>
        </header>
        <div className="page-content">
          <nav>
            nav
          </nav>
          <main>
            main
          </main>        
        </div>
      </StyledDiv>
    )
  }
}

export default App
