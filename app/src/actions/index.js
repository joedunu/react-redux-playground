let nextUserId = 0
// export const addUser = (firstName, lastName) => {
//   return {
//     type: 'ADD_USER',
//     id: nextUserId++,
//     firstName,
//     lastName
//   }
// }

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleUser = (id) => {
  return {
    type: 'TOGGLE_USER',
    id
  }
}
