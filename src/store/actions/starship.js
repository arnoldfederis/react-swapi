import client from '../../config/client'
import showAlert from '../../utils/showAlert'
import { READ_STARSHIPS, SET_IS_LOADING } from '../types'

export const fetchData = (page) => (dispatch) => {
  client.get(`/starships/?page=${page}`)
    .then(({ data }) => {
      dispatch({
        type: READ_STARSHIPS,
        payload: {
          starships: data.results,
          hasNext: data.next !== null
        }
      })

      dispatch({
        type: SET_IS_LOADING,
        payload: false
      })
    })
    .catch(() => {
      dispatch({
        type: SET_IS_LOADING,
        payload: false
      })
      showAlert({ dispatch, message: 'Failed to fetch data. Please refresh your browser.', variant: 'danger' })
    })
}
