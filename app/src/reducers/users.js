'use strict'

export const FETCH_USER_REQUESTED = 'USER/FETCH/REQUESTED'
export const FETCH_USER_SUCCEEDED = 'USER/FETCH/SUCCEEDED'
export const FETCH_USER_FAILED = 'USER/FETCH/FAILED'

export const CREATE_USER_REQUESTED = 'USER/CREATE/REQUESTED'
export const CREATE_USER_SUCCEEDED = 'USER/CREATE/SUCCEEDED'
export const CREATE_USER_FAILED = 'USER/CREATE/FAILED'

export const TOGGLE_USER = 'USER/TOGGLE'

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCEEDED: {
      return action.user
    }
    case TOGGLE_USER:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_USER:
      return state.map(t =>
        user(t, action)
      )
    case FETCH_USER_SUCCEEDED:
      return action.users.data
    case CREATE_USER_SUCCEEDED:
      let newState = state.slice()
      newState.push(user({}, action))
      return newState
    default:
      return state
  }
}

// Action Creators
export const fetchUsersRequest = () => ({type: FETCH_USER_REQUESTED})
export const fetchUsersSuccess = (users) => ({type: FETCH_USER_SUCCEEDED, users})
export const fetchUsersFailed = (error) => ({type: FETCH_USER_FAILED, error})

export const createUserRequest = (values) => ({type: CREATE_USER_REQUESTED, values})
export const createUserSuccess = (user) => ({type: CREATE_USER_SUCCEEDED, user})
export const createUserFailed = (error) => ({type: CREATE_USER_FAILED, error})

export default users
