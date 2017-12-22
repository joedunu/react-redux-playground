'use strict'

// Actions
export const SET_EDIT_USER = 'APP/EDIT_USER'

const initialState = {
  editingUser: null
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_USER:
      state.editingUser = action.id
      return state
    default:
      return state
  }
}

// Action creators
export const setEditingUser = (id) => ({type: SET_EDIT_USER, id})

export default appReducer
