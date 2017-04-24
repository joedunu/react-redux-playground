import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from '../user/User'

class UsersList extends Component {
  componentDidMount () {
    let {store} = this.props
    store.dispatch({type: 'FETCH_REQUESTED'})
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
  store: PropTypes.object.isRequired
}

export default UsersList
