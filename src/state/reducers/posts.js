import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL
} from '../actions'
import { toast } from 'react-toastify'

export const post = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { ...state, loading: true }
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CREATE_POST_SUCCESS:
      toast('the publication was created correctly')
      return {
        ...state,
        loading: false
      }
    case UPDATE_POST_SUCCESS:
      toast('the publication was updated correctly')
      return { ...state, loading: false }
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while create post'
      }
    case UPDATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while create post'
      }
    default:
      return state
  }
}

export const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_DATA_SUCCESS:
      return { ...state, loading: false, posts: action.data, error: null }
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        posts: null
      }
    default:
      return state
  }
}
