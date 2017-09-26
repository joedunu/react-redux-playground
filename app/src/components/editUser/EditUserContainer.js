'use strict'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import {omit} from 'lodash'

import { createUserRequest } from '../../reducers/users'
import AddNewUser from './EditUser'

const selector = formValueSelector('addNewUser')

export const mapStateToProps = (state) => {
  console.log('State', omit(state.users[23], ['id']))
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
      dispatch(createUserRequest(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)
