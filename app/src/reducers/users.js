'use strict'

export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED'
export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED'

const user = (state = {}, action) => {
  switch (action.type) {
    // case 'ADD_USER':
    //   return {
    //     id: action.id,
    //     firstName: action.firstName,
    //     lastName: action.lastName,
    //     completed: false
    //   }
    case 'TOGGLE_USER':
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
    // case 'ADD_USER':
    //   return [
    //     ...state,
    //     user(undefined, action)
    //   ]
    case 'TOGGLE_USER':
      return state.map(t =>
        user(t, action)
      )
    case FETCH_USER_SUCCEEDED:
      console.log('Action: ', action)
      return action.data.data
    case 'ADD_USER_SUCCEEDED':
      console.log('Action data: ', action.data.data)
      console.log('State: ', state)
      return state.push(action.data.data)
    default:
      return state
  }
}

// Action Createors

export const fetchUser = () => {
  return {type: FETCH_USER_REQUESTED}
}

export default users
