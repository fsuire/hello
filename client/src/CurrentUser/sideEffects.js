import axios from 'axios'

import { update } from './actions'
// import { ACCOUNT_TYPE } from './constants'

export const updateCurrentUser = (dispatch) => async (user) => {
  const action = update(user)
  dispatch(action)
}

export const logUserIn = (dispatch) => async (user) => {
  const response = await axios.post('http://localhost:3001/oauth', { user })
  console.log('coucou', response)
}
