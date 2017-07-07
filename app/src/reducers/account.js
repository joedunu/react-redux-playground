'use strict'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'
export const FETCH_ACCOUNT = 'FETCH_ACCOUNT'

const account = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT: {
      return state
    }
    case CREATE_ACCOUNT: {
      return state
    }
    case UPDATE_ACCOUNT: {
      return state
    }
    default:
      return state
  }
}

export default account
