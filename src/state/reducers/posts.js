import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL
} from '../actions'

export const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
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

export const post = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, loading: true }
    case CREATE_POST_SUCCESS:
      return { ...state, loading: false }
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while create post'
      }
    default:
      return state
  }
}
