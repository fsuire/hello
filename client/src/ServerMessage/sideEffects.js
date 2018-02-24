import { update } from './actions'

export const fetchServerMessage = (dispatch) => async () => {
  const response = await(await fetch('http://localhost:3001')).text()

  const action = update(response)
  dispatch(action)
}