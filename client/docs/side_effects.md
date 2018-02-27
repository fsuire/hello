# Side effects

The side effects are in charge of making synchronous or asynchronous things (such as sending http request, listening to a websocket...) and dispatch actions so the redux store is aware of what is going on.

A side effect is a curried function. The first function of this currying is for passing the `dispatch` function of react-redux. It's meant to be used by the `mapDispatchToProps` function of a connected component. The second function of this currying (that could be `async`) is meant to be directly consumed by the connected component.

The side effects of a component reside in its component's directory, in a file named `sideEffects.js`:
```javascript
import { doSomeAction } from './actions'

export const fetchSomeValue = (dispatch) => async (someParams) => {
  const response = await fetch(`http://some-domain.com?params=${someParams}`)
  const payload = await response.json()
  const action = doSomeAction(payload)
  dispatch(action)
}
```

How it should be used in a `mapDispatchToProps` function:
```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSomeValue } from './selectors'
import { fetchSomeValue } from './sideEffects'

export class SomeComponent extends Component {
  componentDidMount() {
    this.props.fetchSomeValue()
  }

  render() {
    return (<div>{this.props.someValue}</div>)
  }
}

const mapStateToProps = (state) => ({
  someValue: getSomeValue(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchSomeValue: fetchSomeValue(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)
```

## Blocking the mad clicker

Often, side effects are bound to, for instance, a click action. And often, there are mad clickers who click twelve times on the same button in less than half a second. Therefore, the same side effect is triggered twelve times in less than half a second. In order to prevent that kind of situation, the `block` util can be used: as long as the first call did not finished, the other calls are just ignored:
```javascript
import { block } from '/app/src/utils/sideEffects'

import { doSomeAction } from './actions'
import { SOME_ACTION } from './constants'

export const fetchSomeValue = (dispatch) => 
  block(SOME_ACTION, async (someParams) => {
    const response = await fetch(`http://some-domain.com?params=${someParams}`)
    const payload = await response.json()
    const action = doSomeAction(payload)
    dispatch(action)
  })
```