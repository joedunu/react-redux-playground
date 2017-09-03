'use strict'

import {watchCreateUser, watchFetchUsers} from './user'
import {watchFetchAccount} from './account'

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield [
    watchFetchUsers(),
    watchCreateUser(),
    watchFetchAccount()
  ]
}
