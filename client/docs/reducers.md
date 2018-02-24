# Reducers

A component may have some reducers. These should lay in the `reducers.js` file of the component.

Reducers are exactly as they are described in the [react-redux documentation](https://redux.js.org/docs/basics/Reducers.html).

A `reducers.js` example:
```javascript

// import some action types from constants files
import { SOME_ACTION_TYPE } from './constants'
import { SOME_OTHER_ACTION_TYPE } from '/app/src/SomeComponent/constants'

const initialState = {
  someStateValue: 'default value'
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SOME_ACTION_TYPE:
    case SOME_OTHER_ACTION_TYPE:
      return {
        ...state,
        someStateValue: action.payload
      }
    default:
      return state
  }
}
```

As for the main application reducer (located in `src/reducers.js`), the `combineReducers` function shipped by [react-redux](https://redux.js.org/docs/basics/Reducers.html) can be used.

Reducers are often imported by their parent component's reducers and often used in composed reducers.