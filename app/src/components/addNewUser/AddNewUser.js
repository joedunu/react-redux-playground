import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserForm from '../userForm/UserForm'

class AddNewUser extends Component {
  render () {
    return (
      <UserForm
        onSubmit={this.props.createUserRequest}
      />
    )
  }
}

AddNewUser.propTypes = {
  createUserRequest: PropTypes.func
}

export default AddNewUser
