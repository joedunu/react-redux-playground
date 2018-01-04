import React from 'react'
import UsersReducer, {types} from './Users'

describe('UsersReducer', () => {
  describe('types', () => {
    test('returns users reducer types', () => {
      expect(types).toEqual({
        CREATE_USER_FAILED: 'USER/CREATE/FAILED',
        CREATE_USER_REQUESTED: 'USER/CREATE/REQUESTED',
        CREATE_USER_SUCCEEDED: 'USER/CREATE/SUCCEEDED',
        DELETE_USER_FAILED: 'USER/DELETE/FAILED',
        DELETE_USER_REQUESTED: 'USER/DELETE/REQUESTED',
        DELETE_USER_SUCCEEDED: 'USER/DELETE/SUCCEEDED',
        EDIT_USER_FAILED: 'USER/EDIT/FAILEQUESTED',
        EDIT_USER_REQUESTED: 'USER/EDIT/REQUESTED',
        EDIT_USER_SUCCEEDED: 'USER/EDIT/SUCCEEDED',
        FETCH_USER_FAILED: 'USER/FETCH/FAILED',
        FETCH_USER_REQUESTED: 'USER/FETCH/REQUESTED',
        FETCH_USER_SUCCEEDED: 'USER/FETCH/SUCCEEDED',
        TOGGLE_USER: 'USER/TOGGLE'
      })
    })
  })

  describe('reducer', () => {
    test('handles TOGGLE_USER', () => {
      expect(
        UsersReducer(undefined, {
          type: types.TOGGLE_USER
        })
      ).toEqual([])
    })

    test('handles CREATE_USER_SUCCEEDED', () => {
      expect(
        UsersReducer(undefined, {
          type: types.CREATE_USER_SUCCEEDED,
          user: {firstName: 'David'}
        })
      ).toEqual([{firstName: 'David'}])
    })

    test('handles DELETE_USER_SUCCEEDED', () => {
      expect(
        UsersReducer([{firstName: 'David', id: 1}], {
          type: types.DELETE_USER_SUCCEEDED,
          id: 1
        })
      ).toEqual([])
    })
  })
})
