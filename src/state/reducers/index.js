import { combineReducers } from 'redux'
import { posts, post } from './posts'
import auth from './auth'
import ui from './ui'

const reducers = combineReducers({
  posts,
  post,
  auth,
  ui
})

export default reducers
