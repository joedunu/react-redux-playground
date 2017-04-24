import { connect } from 'react-redux'
import { toggleUser } from '../actions'
import UsersList from '../components/usersList/UsersList'

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
    }
  }
}

const VisibleUsersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

export default VisibleUsersList