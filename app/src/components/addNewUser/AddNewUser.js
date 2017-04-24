import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions'

import styles from './AddNewUser.css'

let AddNewUser = ({dispatch}) => {
  let firstName
  let lastName

  return (
    <div className={styles.addNewUser}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!firstName.value.trim() || !lastName.value.trim()) {
          return
        }
        dispatch(addUser(firstName.value, lastName.value))
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

AddNewUser = connect()(AddNewUser)
export default AddNewUser
