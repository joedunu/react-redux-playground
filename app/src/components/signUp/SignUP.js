import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserForm from '../userForm/UserForm'

class SignUP extends Component {
  render () {
    return (
      <UserForm
        onSubmit={this.props.createUserRequest}
        title='Sign Up'
      />
    )
  }
}

SignUP.propTypes = {
  createUserRequest: PropTypes.func
}

export default SignUP
