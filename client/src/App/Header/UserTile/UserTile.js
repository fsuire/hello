import React, { Component } from 'react'
import styled from 'styled-components'
import GoogleLogin from 'react-google-login'

const StyledDiv = styled.div`
`

const responseGoogle = (response) => {
  console.log(response);
}

export default class UserTile extends Component {
  render() {
    return (
      <StyledDiv>
        <GoogleLogin
          clientId="713566423116-ehahqn0p1sphuln3r1jk66gr2d3ttl6d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          style={{}}
        />
      </StyledDiv>
    )
  }
}