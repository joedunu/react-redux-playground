'use strict'
import { connect } from 'react-redux'

import { createUserRequest } from '../../reducers/users'
import AddNewUser from './AddNewUser'

export const mapStateToProps = (state) => {
  return {
    users: state
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    createUserRequest: () => {
      dispatch(createUserRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewUser)
