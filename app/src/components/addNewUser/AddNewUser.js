import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './AddNewUser.css'

class AddNewUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: {},
      lastName: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    let {store} = this.props
    let {firstName, lastName} = this.state
    if (!firstName.value.trim() || !lastName.value.trim()) {
      return
    }
    store.dispatch({
      type: 'ADD_USER',
      data: {
        firstName: firstName.value, lastName: lastName.value
      }
    })
    firstName.value = ''
    lastName.value = ''
  }

  updateState (field, value) {
    this.setState({
      field: value
    })
  }

  render () {
    return (
      <div className='addNewUser'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <span>First Name: </span><input className='first-name' ref={node => {
              this.state.firstName = node
            }}
          />
            <span>Last Name: </span><input ref={node => {
              this.state.lastName = node
            }} />
            <span>Date of Birth: </span><input />
          </div>
          <div className='row'>
            <div className='col-6'>
              <button className='btn btn-secondary'>Cancel</button>
            </div>
            <div className='col-6'>
              <button className='btn btn-primary' type='submit'>Add User</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

AddNewUser.propTypes = {
  store: PropTypes.object.isRequired
}

export default connect()(AddNewUser)
