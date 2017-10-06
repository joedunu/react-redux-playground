'use strict'

import { connect } from 'react-redux'
import UsersList from '../components/usersList/UsersList'

import { actions as usersActions } from '../reducers/users'
import { fetchAccountRequest } from '../reducers/account'

const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return users
    case 'SHOW_COMPLETED':
      return users.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return users.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    users: getVisibleUsers(state.users, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (id) => {
      dispatch(usersActions.editUserRequest(id))
    },
    fetchAllUsers: () => {
      dispatch(usersActions.fetchUsersRequest())
    },
    fetchAccounts: () => {
      dispatch(fetchAccountRequest())
    }
  }
}

const VisibleUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

export default VisibleUsersList
