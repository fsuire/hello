import { update } from './actions'
import { ACCOUNT_TYPE } from './constants'

export const updateCurrentUser = (dispatch) => async (payload, type) => {
  let user = { type }
  switch(type) {
    case ACCOUNT_TYPE.FACEBOOK:
      user = { ...user, ...payload }
      break;
    case ACCOUNT_TYPE.ANONYMOUS:
    default:
      break;
  }
  const action = update(user)
  dispatch(action)
}
