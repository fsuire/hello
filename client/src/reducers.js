import { combineReducers } from 'redux'

import currentUser from './CurrentUser/reducers'
import serverMessage from './ServerMessage/reducers'

const reducer = combineReducers({
  currentUser,
  serverMessage
})

export default reducer
