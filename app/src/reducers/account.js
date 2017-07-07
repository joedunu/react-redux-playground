'use strict'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

const account = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT: {
      return state
    }
    case UPDATE_ACCOUNT: {
      return state
    }
  }
}

export default account
