import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper'

import styles from './UserForm.css'
import ReduxTextField from '../common/ReduxTextField/ReduxTextField'

const onSubmitFail = (data) => {
  console.log('onSubmitFail: ', data)
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'First name is required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 2 characters or more'
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 2 characters or more'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.mobile) {
    errors.mobile = 'Mobile number is required'
  } else if (isNaN(Number(values.mobile))) {
    errors.mobile = 'Must be a number'
  }
  return errors
}

let UserForm = (props) => {
  const {handleSubmit, enableEdit} = props
  return (
    <Paper elevattion={4} className={styles['user-form']}>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-4'>
            <Field
              name='firstName'
              component={ReduxTextField}
              label='First Name'
            />
          </div>
          <div className='col-2'>&nbsp;</div>
          <div className='col-4'>
            <Field name='lastName' component={ReduxTextField} type='text' label='Last Name'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <Field name='email' component={ReduxTextField} type='text' label='Email'/>
          </div>
          <div className='col-2'>&nbsp;</div>

          <div className='col-4'>
            <Field name='mobile' component={ReduxTextField} type='text' label='Mobile'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>&nbsp;</div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <button className='btn btn-secondary'>Cancel</button>
          </div>
          <div className='col-6'>
            <button className='btn btn-primary' type='submit'>{enableEdit ? 'Edit User' : 'Sign Up'}</button>
          </div>
        </div>
      </form>
    </Paper>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  enableEdit: PropTypes.bool
}

export default reduxForm({
  form: 'editUser',
  validate,
  enableReinitialize: true,
  onSubmitFail
})(UserForm)
