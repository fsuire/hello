
import { UPDATE_SERVERMESSAGE } from './constants'

const initialState = {
  serverMessage: 'default message'
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SERVERMESSAGE:
      return {
        ...state,
        serverMessage: action.payload
      }
    default:
      return state
  }
}
