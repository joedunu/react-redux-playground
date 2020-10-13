'use strict'
// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Delete from 'material-ui-icons/Delete'

import './UserForm.css'
import ReduxTextField from '../common/ReduxTextField/ReduxTextField'

const onSubmitFail = (data) => {
  console.log('onSubmitFail: ', data)
}

const validate = values => {
  let errors = {}
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
  const {handleSubmit, enableEdit, title, classes, deleteUser, goTo} = props
  return (
    <Paper elevattion={4} className='user-form'>
      <Typography type='display1' gutterBottom>
        {title}
      </Typography>
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
            <Button className='' onClick={() => goTo('/')}>Cancel</Button>
          </div>
          <div className='col-6'>
            <Button raised color='primary' className='' type='submit'>{enableEdit ? 'Save Update' : 'Sign Up'}</Button>
            {enableEdit ? <Button raised color='accent' onClick={deleteUser}>Delete&nbsp;<Delete /></Button> : ''}
          </div>
        </div>
      </form>
    </Paper>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
  enableEdit: PropTypes.bool,
  title: PropTypes.string.isRequired,
  deleteUser: PropTypes.func,
  classes: PropTypes.object,
  goTo: PropTypes.func.isRequired,
  formErrors: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'editUser',
  validate,
  enableReinitialize: true,
  onSubmitFail
})(UserForm)
