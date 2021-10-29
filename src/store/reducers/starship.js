import { READ_STARSHIPS, SET_IS_LOADING } from '../types'

const initialState = {
  starships: [],
  hasNext: false,
  isLoading: true
}

const starshipReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case READ_STARSHIPS:
      return { ...state, starships: payload.starships, hasNext: payload.hasNext }

    case SET_IS_LOADING:
      return { ...state, isLoading: payload }

    default:
      return state
  }
}

export default starshipReducer
