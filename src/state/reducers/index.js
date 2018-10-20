import { combineReducers } from 'redux'
import { posts, post } from './posts'
import auth from './auth'

const reducers = combineReducers({
  posts,
  post,
  auth
})

export default reducers
