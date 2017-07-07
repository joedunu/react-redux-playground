'use strict'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'
export const FETCH_ACCOUNT = 'FETCH_ACCOUNT'
export const FETCH_ACCOUNT_SUCCEEDED = 'FETCH_ACCOUNT_SUCCEEDED'

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
    case FETCH_ACCOUNT_SUCCEEDED: {
      return action.data.data
    }
    default:
      return state
  }
}

export default account
