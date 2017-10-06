import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddNewUserForm from './EditUserForm'

import './EditUser.css'

class AddNewUser extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    this.props.createUserRequest(values)
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
