import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import users from './users/Users'
import account from './account'
import appReducer from './appReducer'

const rootReducer = combineReducers({
  appDetails: appReducer,
  account,
  users,
  form: formReducer,
  router: routerReducer
})

export default rootReducer
