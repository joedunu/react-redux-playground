import { combineReducers } from 'redux'
import users from './users'
import visibilityFilter from './visibilityFilter'

const exampleApp = combineReducers({
  users,
  visibilityFilter
})

export default exampleApp
