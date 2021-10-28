import { READ_STARSHIPS } from '../types'

const initialState = {
  starships: [],
  hasNext: false
}

const starshipReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case READ_STARSHIPS:
      return { ...state, starships: payload.starships, hasNext: payload.hasNext }

    default:
      return state
  }
}

export default starshipReducer
