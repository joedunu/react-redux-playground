'use strict'
import { connect } from 'react-redux'
import {findIndex} from 'lodash'

import { actions as usersActions } from '../../reducers/users'
import EditUser from './EditUser'
import { push } from 'react-router-redux'

export const mapStateToProps = (state) => {
  const editingUserIndex = findIndex(state.users, (user) => {
    return state.appDetails.editingUser === user.id
  })

  return {
    initialValues: state.users[editingUserIndex]
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    updateUserRequest: (values) => {
      dispatch(usersActions.editUserRequest(values))
    },
    goTo: (location) => {
      dispatch(push(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
