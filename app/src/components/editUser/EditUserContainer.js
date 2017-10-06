'use strict'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import {omit} from 'lodash'

import { actions as usersActions } from '../../reducers/users'
import AddNewUser from './EditUser'

export const mapStateToProps = (state) => {
  console.log('State', omit(state.users[0], ['id']))
  return {
    initialValues: omit(state.users[0], ['id'])
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    createUserRequest: (values) => {
      dispatch(usersActions.createUserRequest(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)
