import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from '../user/User'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchAllUsers()
  }

  render () {
    let {users, onUserClick} = this.props
    return (
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
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func.isRequired,
  fetchAllUsers: PropTypes.func.isRequired
}

export default UsersList
