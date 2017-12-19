import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import users from './users'
import account from './account'

const rootReducer = combineReducers({
  account,
  users,
  form: formReducer,
  router: routerReducer
})

export default rootReducer
