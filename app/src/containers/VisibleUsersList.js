'use strict'

import { connect } from 'react-redux'
import { toggleUser } from '../actions'
import UsersList from '../components/usersList/UsersList'

import {fetchUser} from '../reducers/users'
import {FETCH_ACCOUNT} from '../reducers/account'

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
      dispatch(toggleUser(id))
    },
    fetchAllUsers: () => {
      dispatch(fetchUser())
    },
    fetchAccounts: () => {
      dispatch({type: 'FETCH_ACCOUNT_REQUESTED'})
    }
  }
}

const VisibleUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

export default VisibleUsersList
