
import { UPDATE_SERVERMESSAGE } from './constants'

export const updateServerMessage = (message) => ({
  type: UPDATE_SERVERMESSAGE,
  payload: message
})