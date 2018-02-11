# About components

## Folders and files conventions

What is called here a "connected component" refers to a component connected to the redux store via [react-redux](https://github.com/reactjs/react-redux).

1. A component's name is in upper camel case
1. All of a component's files are always in its own folder
1. The main component's file name (the one exporting the main react component) is also in upper camel case
1. A `index.js` file is present in the component's directory, re-exporting directly the main react component and/or its connected version and its sub-components.

### Non connected component example

The component's files and folder structure must looks like this:
```
ComponentName
  |-- ComponentName.js
  |-- index.js
```
The `ComponentName.js` file:
```javascript
import React, { Component } from 'react'

export default class ComponentName  extends Component {
  render() {
    return (<div>component</div>)
  }
}
```
The `index.js` file:
```javascript
import ComponentName from './ComponentName'

export default ComponentName
```

### Connected component example

The component's files and folder structure must looks like this:
```
ComponentName
  |-- ComponentName.js
  |-- index.js
```
Some other files can also exist in the component's directory:
1. `actions.js`, for the [component's actions](actions.html)
1. `constants.js`, for the component's constants
1. `reducers.js`, for the component's reducers
1. `selectors.js`, for the component's selectors
1. `sideEffects.js`, for the component's sideEffects

None is required, but each has a role when it comes to play with the redux store.

The `ComponentName.js` file (note that the default export is now the result of the `connect` function):
```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ComponentName  extends Component {
  render() {
    return (<div>component</div>)
  }
}

const mapStateToProps = (state) => ({
  someProp: null // In order to get a value from the redux store, a selector should be used
})

const mapDispatchToProps = (dispatch) => ({
  someDispatchFunction: null // For dispacthing redux actions. A side effect should be used
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)
```
The `index.js` file can be the same as for a non connected component, but the non connected version of the component could prospectively be exported too:
```javascript
import ConnectedComponentName, { ComponentName } from './ComponentName'

export default ConnectedComponentName
export {
  ComponentName
}
```
