import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import './AddNewUser.css'

const AddNewUserForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <Field name='firstName' component='input' type='text'/>
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
  )
}

AddNewUserForm.propTypes = {
  onSubmit: PropTypes.func
}

export default reduxForm({
  form: 'addNewUser'
})(AddNewUserForm)
