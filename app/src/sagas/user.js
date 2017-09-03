'use strict'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

import {
  FETCH_USER_REQUESTED,
  CREATE_USER_REQUESTED,
  fetchUsersFailed,
  fetchUsersSuccess,
  createUserFailed,
  createUserSuccess
} from '../reducers/users'
import { BASE_URL } from '../constants/urlConstants'

export function * addUser (user) {
  try {
    yield call(request.post, `${BASE_URL}/customers`, user.data)
    yield put(createUserSuccess())
  } catch (error) {
    yield put(createUserFailed(error))
  }
}

export function * fetchUsers () {
  try {
    const data = yield call(request.get, `${BASE_URL}/customers`)
    yield put(fetchUsersSuccess(data))
  } catch (error) {
    yield put(fetchUsersFailed(error))
  }
}

export function * watchFetchUsers () {
  yield takeEvery(FETCH_USER_REQUESTED, fetchUsers)
}

export function * watchCreateUser () {
  yield takeEvery(CREATE_USER_REQUESTED, addUser)
}
