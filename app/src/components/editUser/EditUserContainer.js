'use strict'
import { connect } from 'react-redux'
import {findIndex} from 'lodash'

import { actions as usersActions } from '../../reducers/users'
import EditUser from './EditUser'

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
