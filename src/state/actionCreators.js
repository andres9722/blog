import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  LOGOUT,
  GET_DATA_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  SHOW_MODAL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL
} from './actions'
import API from '../api/api'
import AUTH from '../api/auth'

export const showModal = () => ({ type: SHOW_MODAL })

export const onLogout = () => ({ type: LOGOUT })

export const getData = username => {
  return async dispatch => {
    dispatch({ type: GET_DATA_REQUEST })

    if (username === '') {
      return dispatch({
        type: GET_DATA_SUCCESS,
        data: null
      })
    }

    try {
      let { data } = await API.get(`users/${username.trim()}/gists`)

      return dispatch({
        type: GET_DATA_SUCCESS,
        data
      })
    } catch (error) {
      dispatch({ type: GET_DATA_FAIL, error: error.message })
    }
  }
}

export const getToken = code => {
  return async dispatch => {
    dispatch({ type: TOKEN_REQUEST })

    try {
      let { data } = await AUTH.requestToken(code)

      let token = await data.token

      let user = await AUTH.requestUser(token)

      let payload = {
        token,
        user
      }

      return dispatch({
        type: TOKEN_SUCCESS,
        payload
      })
    } catch (error) {
      dispatch({ type: TOKEN_FAIL })
    }
  }
}

export const createPost = (post, token) => {
  return async dispatch => {
    dispatch({ type: CREATE_POST_REQUEST })

    try {
      await API.post(post, token)

      return dispatch({
        type: CREATE_POST_SUCCESS
      })
    } catch (error) {
      dispatch({ type: CREATE_POST_FAIL, error: error.message })
    }
  }
}

export const updatePost = (id, post, token) => {
  return async dispatch => {
    dispatch({ type: UPDATE_POST_REQUEST })

    try {
      await API.update(id, post, token)

      return dispatch({
        type: UPDATE_POST_SUCCESS
      })
    } catch (error) {
      dispatch({ type: UPDATE_POST_FAIL, error: error.message })
    }
  }
}
