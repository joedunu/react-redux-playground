import { combineReducers } from 'redux'
import users from './users'
import account from './account'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  account,
  users,
  visibilityFilter
})

export default rootReducer
