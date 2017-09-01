import { combineReducers } from 'redux'
import users from './users'
import account from './account'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  account,
  users,
  visibilityFilter,
  form: formReducer
})

export default rootReducer
