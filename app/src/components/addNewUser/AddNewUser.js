import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddNewUserForm from './AddNewUserForm'

import './AddNewUser.css'

class AddNewUser extends Component {
  handleSubmit (values) {
    values.preventDefault()
    console.log('handleSubmit: ', values.target)
    this.props.createUserRequest()
  }

  render () {
    return (
      <div className='addNewUser'>
        <AddNewUserForm
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

AddNewUser.propTypes = {
  createUserRequest: PropTypes.func
}

export default AddNewUser
