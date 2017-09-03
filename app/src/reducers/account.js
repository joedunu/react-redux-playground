'use strict'

// Actions
export const CREATE_ACCOUNT = 'ACCOUNT/CREATE'
export const UPDATE_ACCOUNT = 'ACCOUNT/UPDATE'
export const FETCH_ACCOUNT_REQUESTED = 'ACCOUNT/FETCH/REQUESTED'
export const FETCH_ACCOUNT_SUCCEEDED = 'ACCOUNT/FETCH/SUCCEEDED'
export const FETCH_ACCOUNT_FAILED = 'ACCOUNT/FETCH/FAILED'

const account = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_REQUESTED: {
      return state
    }
    case CREATE_ACCOUNT: {
      return state
    }
    case UPDATE_ACCOUNT: {
      return state
    }
    case FETCH_ACCOUNT_SUCCEEDED: {
      return action.account.data
    }
    default:
      return state
  }
}

// Action creators
export const fetchAccountRequest = () => ({type: FETCH_ACCOUNT_REQUESTED})
export const fetchAccountSuccess = (account) => ({type: FETCH_ACCOUNT_SUCCEEDED, account})
export const fetchAccountFailed = (error) => ({type: FETCH_ACCOUNT_FAILED, error})

export default account
