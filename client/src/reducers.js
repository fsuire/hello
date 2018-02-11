import { combineReducers } from 'redux'

import serverMessage from './ServerMessage/reducers'

const reducer = combineReducers({
  serverMessage
})

export default reducer
