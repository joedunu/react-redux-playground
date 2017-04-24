import React from 'react'
import PropTypes from 'prop-types'
import User from '../user/User'

const UsersList = ({users, onUserClick}) => (
  <ul>
    {users.map(user =>
      <User
        key={user.id}
        {...user}
        onClick={() => onUserClick(user.id)}
      />
    )}
  </ul>
)

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default UsersList
