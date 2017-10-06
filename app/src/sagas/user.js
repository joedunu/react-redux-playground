'use strict'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

import {
  FETCH_USER_REQUESTED,
  CREATE_USER_REQUESTED,
  actions as usersActions
} from '../reducers/users'
import { BASE_URL } from '../constants/urlConstants'

export function * addUser (action) {
  try {
    const user = yield call(request.post, `${BASE_URL}/customers`, action.values)
    yield put(usersActions.createUserSuccess(user.data))
  } catch (error) {
    yield put(usersActions.createUserFailed(error))
  }
}

export function * fetchUsers () {
  try {
    const data = yield call(request.get, `${BASE_URL}/customers`)
    yield put(usersActions.fetchUsersSuccess(data))
  } catch (error) {
    yield put(usersActions.fetchUsersFailed(error))
  }
}

export function * watchFetchUsers () {
  yield takeEvery(FETCH_USER_REQUESTED, fetchUsers)
}

export function * watchCreateUser () {
  yield takeEvery(CREATE_USER_REQUESTED, addUser)
}
