import { ACCOUNT_TYPE } from './constants'
import { ACTION_TYPE } from './constants'

const initialState = {
  type: ACCOUNT_TYPE.ANONYMOUS
}

export default function currentUser(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPE.UPDATE:
      return { ...action.payload }
    default:
      return state
  }
}