import { update } from './actions'
import { ACCOUNT_TYPE } from './constants'

export const updateCurrentUser = (dispatch) => async (vendorUser, type) => {
  let user = { type }
  switch(type) {
    case ACCOUNT_TYPE.GOOGLE:
      user = { ...user, ...vendorUser.profileObj, token: vendorUser.tokenObj }
      break;
  }

  const action = update(user)
  dispatch(action)
}