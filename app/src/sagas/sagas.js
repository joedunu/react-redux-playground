import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'
import request from 'axios'

// Our worker Saga: will perform the async increment task
export function * incrementAsync () {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function * fetchData () {
  try {
    const data = yield call(request.get, 'http://localhost:3000/customers')
    yield put({type: 'FETCH_SUCCEEDED', data})
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error})
  }
}

export function * addUser (user) {
  try {
    yield call(request.post, 'http://localhost:3000/customers', user.data)
    yield put({type: 'FETCH_REQUESTED'})
  } catch (error) {
    yield put({type: 'ADD_USER_FAILD', error})
  }
}

function * watchCreateUser () {
  yield takeEvery('ADD_USER', addUser)
}

function * watchFetchData () {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield [
    watchIncrementAsync(),
    watchFetchData(),
    watchCreateUser()
  ]
}
