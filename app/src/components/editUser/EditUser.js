import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserForm from '../userForm/UserForm'

class EditUser extends Component {
  render () {
    const {updateUserRequest, initialValues} = this.props
    return (
      <div>
        <UserForm
          onSubmit={updateUserRequest}
          initialValues={initialValues}
          enableEdit
        />
      </div>
    )
  }
}

EditUser.propTypes = {
  updateUserRequest: PropTypes.func,
  initialValues: PropTypes.object
}

export default EditUser
