
import { UPDATE } from './constants'

export const update = (message) => ({
  type: UPDATE,
  payload: message
})