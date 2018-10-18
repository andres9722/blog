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
  GET_DATA_REQUEST
} from './actions'

import { getFromApi } from '../api/api'
import { requestAuth, requestToken, requestUser } from '../api/auth'

export const getData = () => {
  return async dispatch => {
    dispatch({ type: GET_DATA_REQUEST })

    try {
      let { data } = await getFromApi('gists/public')

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
        .replace('&scope=user&token_type=bearer', '')

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
