import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from '../actions'

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true }
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, posts: action.data }
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching data'
      }
    default:
      return state
  }
}

export default posts
