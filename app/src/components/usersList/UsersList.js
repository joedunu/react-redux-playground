import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'

import User from '../user/User'
import styles from './UsersList.css'

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchAllUsers()
    this.props.fetchAccounts()
  }

  render () {
    let {users, onUserClick} = this.props
    return (
      <div className={styles['users-list']}>
        <Paper elevation={4} className={styles['users-list', 'page']}>
          First Name Last Name Email Mobile
          <ul>
            {users.map(user =>
              <User
                key={user.id}
                {...user}
                onClick={() => onUserClick(user.id)}
              />
            )}
          </ul>
        </Paper>
      </div>
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
  fetchAllUsers: PropTypes.func.isRequired,
  fetchAccounts: PropTypes.func.isRequired
}

export default UsersList
