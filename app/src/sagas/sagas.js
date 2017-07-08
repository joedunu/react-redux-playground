// import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

import {FETCH_USER_SUCCEEDED, FETCH_USER_REQUESTED} from '../reducers/users'

export function * fetchData () {
  try {
    const data = yield call(request.get, 'http://localhost:3000/users')
    yield put({type: FETCH_USER_SUCCEEDED, data})
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export function * fetchAccount () {
  try {
    const data = yield call(request.get, 'http://localhost:3000/accounts')
    yield put({type: 'FETCH_ACCOUNT_SUCCEEDED', data})
  } catch (error) {
    yield put({type: 'FETCH_ACCOUNT_FAILED', error})
  }
}

export function * addUser (user) {
  try {
    yield call(request.post, 'http://localhost:3000/users', user.data)
    yield put({type: 'FETCH_REQUESTED'})
  } catch (error) {
    yield put({type: 'ADD_USER_FAILD', error})
  }
}

function * watchCreateUser () {
  yield takeEvery('ADD_USER', addUser)
}

function * watchFetchData () {
  yield takeEvery(FETCH_USER_REQUESTED, fetchData)
}

function * watchFetchAccount () {
  yield takeEvery('FETCH_ACCOUNT_REQUESTED', fetchAccount)
}

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield [
    watchFetchData(),
    watchCreateUser(),
    watchFetchAccount()
  ]
}
