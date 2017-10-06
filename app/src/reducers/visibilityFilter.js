'use strict'
export const types = {
  SET_VISIBILITY_FILTER: 'visibilityFilter/SET_VISIBILITY_FILTER'
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})

export const actions = {
  setVisibilityFilter
}
