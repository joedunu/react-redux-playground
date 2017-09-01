'use strict'

export const FETCH_USER_REQUESTED = 'USER/FETCH/REQUESTED'
export const FETCH_USER_SUCCEEDED = 'USER/FETCH/SUCCEEDED'
export const FETCH_USER_FAILED = 'USER/FETCH/FAILED'

export const CREATE_USER_REQUESTED = 'USER/CREATE/REQUESTED'
export const CREATE_USER_SUCCEEDED = 'USER/CREATE/SUCCEEDED'
export const CREATE_USER_FAILED = 'USER/CREATE/FAILED'

export const UPDATE_USER_FIELD = 'USER/UPDATE_FIELD'

export const TOGGLE_USER = 'USER/TOGGLE'

const initialState = {
  firstName: '',
  lastName: ''
}

const addNewUserForm = (state = {...initialState}, action) => {
  switch (action.type) {
    // case 'ADD_USER':
    //   return {
    //     id: action.id,
    //     firstName: action.firstName,
    //     lastName: action.lastName,
    //     completed: false
    //   }
    case TOGGLE_USER:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case UPDATE_USER_FIELD:
      return {
        ...state
      }
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_USER':
    //   return [
    //     ...state,
    //     user(undefined, action)
    //   ]
    case TOGGLE_USER:
      return state.map(t =>
        user(t, action)
      )
    case FETCH_USER_SUCCEEDED:
      console.log('Action: ', action)
      return action.users.data
    case CREATE_USER_SUCCEEDED:
      console.log('Action data: ', action.user.data)
      console.log('State: ', state)
      return state.push(action.data.data)
    case UPDATE_USER_FIELD:
      return {
        ...state
      }
    default:
      return state
  }
}

// Action Creators

export const fetchUsersRequest = () => ({type: FETCH_USER_REQUESTED})
export const fetchUsersSuccess = (users) => ({type: FETCH_USER_SUCCEEDED, users})
export const fetchUsersFailed = (error) => ({type: FETCH_USER_FAILED, error})

export const createUserRequest = () => ({type: CREATE_USER_REQUESTED})
export const createUserSuccess = (user) => ({type: CREATE_USER_SUCCEEDED, user})
export const createUserFailed = (error) => ({type: CREATE_USER_FAILED, error})

export default users
