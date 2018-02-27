# Selectors

A selector is a pure function that takes a state as input argument and return a value from that state. They are useful in the `mapStateToProps` function of a connected component.

Selectors live in the `selectors.js` file of a component.

Example of a `selector.js` file:
```javascript
export const getSomeValue = (state) => state.someValue
```
How it should be used in a `mapStateToProps` function:
```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getSomeValue } from './selectors'

export class SomeComponent extends Component {
  render() {
    return (<div>{this.props.someValue}</div>)
  }
}

const mapStateToProps = (state) => ({
  someValue: getSomeValue(state)
})

export default connect(mapStateToProps)(ComponentName)
```