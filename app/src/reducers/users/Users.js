'use strict'
import { findIndex, remove } from 'lodash'

export const types = {
  FETCH_USER_REQUESTED: 'USER/FETCH/REQUESTED',
  FETCH_USER_SUCCEEDED: 'USER/FETCH/SUCCEEDED',
  FETCH_USER_FAILED: 'USER/FETCH/FAILED',

  CREATE_USER_REQUESTED: 'USER/CREATE/REQUESTED',
  CREATE_USER_SUCCEEDED: 'USER/CREATE/SUCCEEDED',
  CREATE_USER_FAILED: 'USER/CREATE/FAILED',

  EDIT_USER_REQUESTED: 'USER/EDIT/REQUESTED',
  EDIT_USER_SUCCEEDED: 'USER/EDIT/SUCCEEDED',
  EDIT_USER_FAILED: 'USER/EDIT/FAILEQUESTED',

  DELETE_USER_REQUESTED: 'USER/DELETE/REQUESTED',
  DELETE_USER_SUCCEEDED: 'USER/DELETE/SUCCEEDED',
  DELETE_USER_FAILED: 'USER/DELETE/FAILED',

  TOGGLE_USER: 'USER/TOGGLE'
}

const user = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_USER_SUCCEEDED: {
      return action.user
    }
    case types.TOGGLE_USER:
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
    case types.TOGGLE_USER:
      return state.map(t =>
        user(t, action)
      )
    case types.FETCH_USER_SUCCEEDED:
      return action.users.data
    case types.CREATE_USER_SUCCEEDED:
      let newState = state.slice()
      newState.push(user({}, action))
      return newState
    case types.EDIT_USER_REQUESTED:
      let editState = state.slice()
      const userIndex = findIndex(editState, (user) => {
        return user.id === action.values.id
      })
      editState[userIndex] = action.values
      return editState
    case types.DELETE_USER_SUCCEEDED:
      let deleteState = state.slice()
      remove(deleteState, (user) => {
        return user.id === action.id
      })
      return deleteState
    default:
      return state
  }
}

// Action Creators
export const actions = {
  fetchUsersRequest: () => ({type: types.FETCH_USER_REQUESTED}),
  fetchUsersSuccess: (users) => ({type: types.FETCH_USER_SUCCEEDED, users}),
  fetchUsersFailed: (error) => ({type: types.FETCH_USER_FAILED, error}),

  createUserRequest: (values) => ({type: types.CREATE_USER_REQUESTED, values}),
  createUserSuccess: (user) => ({type: types.CREATE_USER_SUCCEEDED, user}),
  createUserFailed: (error) => ({type: types.CREATE_USER_FAILED, error}),

  editUserRequest: (values) => ({type: types.EDIT_USER_REQUESTED, values}),
  editUserSuccess: (user) => ({type: types.EDIT_USER_SUCCEEDED, user}),
  editUserFailed: (error) => ({type: types.EDIT_USER_FAILED, error}),

  deleteUserRequest: (id) => ({type: types.DELETE_USER_REQUESTED, id}),
  deleteUserSuccess: (id) => ({type: types.DELETE_USER_SUCCEEDED, id}),
  deleteUserFailed: (error) => ({type: types.DELETE_USER_FAILED, error})
}

export default users
