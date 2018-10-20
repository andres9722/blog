import {
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  REDIRECT_REQUEST,
  REDIRECT_SUCCESS,
  REDIRECT_FAIL,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  LOGOUT,
  GET_DATA_REQUEST,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL
} from './actions'

import API from '../api/api'
import { requestAuth, requestToken, requestUser } from '../api/auth'

export const getData = () => {
  return async dispatch => {
    dispatch({ type: GET_DATA_REQUEST })

    try {
      const { data } = await API.get('gists/public')

      return dispatch({
        type: GET_DATA_SUCCESS,
        data
      })
    } catch (error) {
      dispatch({ type: GET_DATA_FAIL })
    }
  }
}

export const onRedirectAuth = () => {
  return async dispatch => {
    dispatch({ type: REDIRECT_REQUEST })

    try {
      let response = await requestAuth()

      let URL = response.request.responseURL

      window.location = URL

      return dispatch({
        type: REDIRECT_SUCCESS
      })
    } catch (error) {
      dispatch({ type: REDIRECT_FAIL })
    }
  }
}

export const getToken = code => {
  return async dispatch => {
    dispatch({ type: TOKEN_REQUEST })

    try {
      let response = await requestToken(code)

      let token = await response.data
        .replace('access_token=', '')
        .replace('&scope=gist%2Cuser&token_type=bearer', '')

      console.log(token, 'tokeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen')

      let user = await requestUser(token)

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

export const onLogout = () => ({ type: LOGOUT })

export const createPost = (post, token, user) => {
  console.log(post, token, user.login)
  return async dispatch => {
    dispatch({ type: CREATE_POST_REQUEST })

    try {
      let { data } = await API.post(post, token)
      console.log(data, 'jeieiekak')

      return dispatch({
        type: CREATE_POST_SUCCESS
      })
    } catch (error) {
      dispatch({ type: CREATE_POST_FAIL })
    }
  }
}
