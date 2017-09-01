'use strict'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

import {
  FETCH_ACCOUNT_REQUESTED,
  fetchAccountSuccess,
  fetchAccountFailed
} from '../reducers/account'

export function * fetchAccount () {
  try {
    const data = yield call(request.get, 'http://localhost:3000/accounts')
    yield put(fetchAccountSuccess(data))
  } catch (error) {
    yield put(fetchAccountFailed(error))
  }
}

export function * watchFetchAccount () {
  yield takeEvery(FETCH_ACCOUNT_REQUESTED, fetchAccount)
}
