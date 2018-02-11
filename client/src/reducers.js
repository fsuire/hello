import { combineReducers } from 'redux'

import { UPDATE_SERVERMESSAGE } from './constants'

const initialServerMessageState = 'default message'

export function serverMessage(state = initialServerMessageState, action) {
  switch(action.type) {
    case UPDATE_SERVERMESSAGE:
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({
  serverMessage
})

export default reducer
