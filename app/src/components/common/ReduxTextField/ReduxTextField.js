import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const ReduxTextField = ({
                          input,
                          label,
                          meta: {touched, error}
                        }) => (
  <TextField
    label={label}
    error={touched && error}
    helperText={touched && error}
    {...input}
    multiline
    fullWidth
  />
)

ReduxTextField.proptypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object

}

export default ReduxTextField
