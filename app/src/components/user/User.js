import React from 'react'
import PropTypes from 'prop-types'

const User = ({ onClick, firstName, lastName }) => (
  <li
    onClick={onClick} >
    {firstName} {lastName}
  </li>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default User
