'use strict'
import {findIndex} from 'lodash'

export const FETCH_USER_REQUESTED = 'USER/FETCH/REQUESTED'
export const FETCH_USER_SUCCEEDED = 'USER/FETCH/SUCCEEDED'
export const FETCH_USER_FAILED = 'USER/FETCH/FAILED'

export const CREATE_USER_REQUESTED = 'USER/CREATE/REQUESTED'
export const CREATE_USER_SUCCEEDED = 'USER/CREATE/SUCCEEDED'
export const CREATE_USER_FAILED = 'USER/CREATE/FAILED'

export const EDIT_USER_REQUESTED = 'USER/EDIT/REQUESTED'
export const EDIT_USER_SUCCEEDED = 'USER/EDIT/SUCCEEDED'
export const EDIT_USER_FAILED = 'USER/EDIT/FAILED'

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
    case EDIT_USER_REQUESTED:
      let editState = state.slice()
      const userIndex = findIndex(editState, (user) => {
        return user.id === action.values.id
      })
      editState[userIndex] = action.values
      console.log('new state', editState)
      return editState
    default:
      return state
  }
}

// Action Creators
export const actions = {
  fetchUsersRequest: () => ({type: FETCH_USER_REQUESTED}),
  fetchUsersSuccess: (users) => ({type: FETCH_USER_SUCCEEDED, users}),
  fetchUsersFailed: (error) => ({type: FETCH_USER_FAILED, error}),

  createUserRequest: (values) => ({type: CREATE_USER_REQUESTED, values}),
  createUserSuccess: (user) => ({type: CREATE_USER_SUCCEEDED, user}),
  createUserFailed: (error) => ({type: CREATE_USER_FAILED, error}),

  editUserRequest: (values) => ({type: EDIT_USER_REQUESTED, values}),
  editUserSuccess: (user) => ({type: EDIT_USER_SUCCEEDED, user}),
  editUserFailed: (error) => ({type: EDIT_USER_FAILED, error})
}

export default users
