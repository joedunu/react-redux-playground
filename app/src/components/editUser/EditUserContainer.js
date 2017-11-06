'use strict'
import { connect } from 'react-redux'
import {omit} from 'lodash'

import { actions as usersActions } from '../../reducers/users'
import EditUser from './EditUser'

export const mapStateToProps = (state) => {
  console.log('State', omit(state.users[0], ['id']))
  return {
    initialValues: state.users[0]
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    updateUserRequest: (values) => {
      dispatch(usersActions.editUserRequest(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
