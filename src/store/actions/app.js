import { SHOW_ALERT } from '../types'

export const showAlert = (payload) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload
  })
}
