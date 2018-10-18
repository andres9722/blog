import { TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAIL, LOGOUT } from '../actions'

const initialState = {
  loading: false,
  loggedIn: false,
  token: null,
  message: null,
  user: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_REQUEST:
      return { ...state, loading: true }
    case TOKEN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        token: action.payload.token,
        user: action.payload.user.data
      }
    case TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        message: 'Error'
      }
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        token: null,
        user: null
      }
    default:
      return state
  }
}

export default auth
