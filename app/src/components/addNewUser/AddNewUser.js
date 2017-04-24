import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './AddNewUser.css'

class AddNewUser extends Component {
  render () {
    let firstName
    let lastName
    let {store} = this.props
    return (
      <div className='addNewUser'>
        <form onSubmit={e => {
          e.preventDefault()
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
        }}>
          <div className='row'>
            <span>First Name: </span><input className='first-name' ref={node => {
              firstName = node
            }}
          />
            <span>Last Name: </span><input ref={node => {
              lastName = node
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
