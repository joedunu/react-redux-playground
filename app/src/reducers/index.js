import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import users from './users'
import account from './account'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  account,
  users,
  visibilityFilter,
  form: formReducer,
  router: routerReducer
})

export default rootReducer
