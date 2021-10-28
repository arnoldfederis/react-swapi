import client from '../../config/client'
import showAlert from '../../utils/showAlert'
import { READ_STARSHIPS } from '../types'

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
    })
    .catch(() => {
      showAlert({ dispatch, message: 'Failed to fetch data. Please refresh your browser.', variant: 'danger' })
    })
}
