import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import './UserForm.css'

const onSubmitFail = (data) => {
  console.log('onSubmitFail: ', data)
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'Must be 2 characters or more'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Must be 2 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.mobile) {
    errors.mobile = 'Required'
  } else if (isNaN(Number(values.mobile))) {
    errors.mobile = 'Must be a number'
  }
  return errors
}

const renderField = ({input, label, type, meta: {touched, error, warning}, value}) => (
  <div className='col-6'>
    <div className='row'>
      <div className='col-4'>
        <label htmlFor={input.name}>{label} </label>&nbsp;
      </div>
      <div className='col-8'>
        <input value={value} {...input} placeholder={label} type={type}/>
      </div>
    </div>
    <div className='row form-group'>
      <div className='col-12 has-danger'>
        {touched && ((error && <span className='form-control-feedback'>{error}</span>) || (warning &&
          <span className='form-control-feedback'>{warning}</span>))}
      </div>
    </div>

  </div>
)

let UserForm = (props) => {
  const {handleSubmit, enableEdit} = props
  return (
    <form className='container user-form' onSubmit={handleSubmit}>
      <div className='row'>
        <Field name='firstName' component={renderField} type='text' label='First Name' value={'test'} />
        <Field name='lastName' component={renderField} type='text' label='Last Name' />
      </div>
      <div className='row'>
        <Field name='email' component={renderField} type='text' label='Email' />
        <Field name='mobile' component={renderField} type='text' label='Mobile' />
      </div>
      <div className='row'>
        <div className='col-6'>
          <button className='btn btn-secondary'>Cancel</button>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary' type='submit'>{enableEdit ? 'Edit' : 'Add'} User</button>
        </div>
      </div>
    </form>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  enableEdit: PropTypes.bool
}

export default reduxForm({
  form: 'editUser',
  enableReinitialize: true,
  validate,
  onSubmitFail
})(UserForm)
