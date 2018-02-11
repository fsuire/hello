import { UPDATE } from './constants'

const initialState = 'default message'

export default function serverMessage(state = initialState, action) {
  switch(action.type) {
    case UPDATE:
      return action.payload
    default:
      return state
  }
}