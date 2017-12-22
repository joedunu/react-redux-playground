import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserForm from '../userForm/UserForm'

class EditUser extends Component {
  render () {
    const {updateUserRequest, initialValues, goTo} = this.props
    return (
      <div>
        <UserForm
          onSubmit={updateUserRequest}
          initialValues={initialValues}
          enableEdit
          title={`Editing user: ${initialValues.id} - ${initialValues.firstName} ${initialValues.lastName}`}
          goTo={goTo}
        />
      </div>
    )
  }
}

EditUser.propTypes = {
  updateUserRequest: PropTypes.func,
  initialValues: PropTypes.object,
  goTo: PropTypes.func.isRequired
}

export default EditUser
