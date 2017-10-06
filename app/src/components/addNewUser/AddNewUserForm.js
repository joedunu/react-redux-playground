import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import './AddNewUser.css'

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
  if (values.firstName && !values.email) {
    errors.email = 'Required'
  } else if (values.firstName && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.mobile) {
    errors.mobile = 'Required'
  } else if (isNaN(Number(values.mobile))) {
    errors.mobile = 'Must be a number'
  }
  return errors
}

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className='col-6'>
    <div className='row'>
      <div className='col-4'>
        <label htmlFor={input.name}>{label} </label>&nbsp;
      </div>
      <div className='col-8'>
        <input {...input} placeholder={label} type={type} />
      </div>
    </div>
    <div className='row'>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>

  </div>
)

class AddNewUserForm extends Component {
  render () {
    return (
      <form className='container' onSubmit={this.props.handleSubmit}>
        {this.props.invalid ? JSON.stringify(this.props) : ''}
        <div className='row'>
          <Field name='firstName' component={renderField} type='text' label='First Name'/>
          <Field name='lastName' component={renderField} type='text' label='Last Name'/>
        </div>
        <div className='row'>
          <Field name='email' component={renderField} type='text' label='Email'/>
          <Field name='mobile' component={renderField} type='text' label='Mobile'/>
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
}

AddNewUserForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'addNewUser',
  validate,
  enableReinitialize: false,
  onSubmitFail
})(AddNewUserForm)
