
import { ACTION_TYPE } from './constants'

export const update = (user) => ({
  type: ACTION_TYPE.UPDATE,
  payload: user
})