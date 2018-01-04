'use strict'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'
import { omit } from 'lodash'
import { push } from 'react-router-redux'
import {
  types as usersTypes,
  actions as usersActions,
} from '../reducers/users/Users'
import { BASE_URL } from '../constants/urlConstants'

export function * addUser (action) {
  try {
    const user = yield call(request.post, `${BASE_URL}/customers`, action.values)
    yield put(usersActions.createUserSuccess(user.data))
  } catch (error) {
    yield put(usersActions.createUserFailed(error))
  }
}

export function * editUser (action) {
  try {
    const user = yield call(request.put, `${BASE_URL}/customers/${action.values.id}`, omit(action.values, ['type']))
    yield put(usersActions.editUserSuccess(user.data))
    yield put(push('/'))
  } catch (error) {
    yield put(usersActions.editUserFailed(error))
  }
}

export function * deleteUser (action) {
  try {
    const user = yield call(request.delete, `${BASE_URL}/customers/${action.id}`)
    yield put(usersActions.deleteUserSuccess(action.id))
    yield put(push('/'))
  } catch (error) {
    yield put(usersActions.deleteUserFailed(error))
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
  yield takeEvery(usersTypes.FETCH_USER_REQUESTED, fetchUsers)
}

export function * watchCreateUser () {
  yield takeEvery(usersTypes.CREATE_USER_REQUESTED, addUser)
}

export function * watchEditUser () {
  yield takeEvery(usersTypes.EDIT_USER_REQUESTED, editUser)
}

export function * watchDeleteUser () {
  yield takeEvery(usersTypes.DELETE_USER_REQUESTED, deleteUser)
}
