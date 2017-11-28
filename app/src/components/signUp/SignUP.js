import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserForm from '../userForm/UserForm'

class SignUP extends Component {
  render () {
    return (
      <UserForm
        onSubmit={this.props.createUserRequest}
      />
    )
  }
}

SignUP.propTypes = {
  createUserRequest: PropTypes.func
}

export default SignUP
