'use strict'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import {omit} from 'lodash'

import { actions as usersActions } from '../../reducers/users'
import SignUP from './SignUP'

const selector = formValueSelector('addNewUser')

export const mapStateToProps = (state) => {
  const {firstName, lastName, email, mobile} = selector(state, 'firstName', 'lastName', 'email', 'mobile')
  return {
    users: state,
    initialValues: omit(state.users[23], ['id']),
    firstName,
    lastName,
    email,
    mobile
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    createUserRequest: (values) => {
      dispatch(usersActions.createUserRequest(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUP)
