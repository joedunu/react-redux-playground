'use strict'

import {watchCreateUser, watchFetchUsers, watchEditUser, watchDeleteUser} from './user'
import {watchSetEditUser} from './appSagas'
import {watchFetchAccount} from './account'

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield [
    watchFetchUsers(),
    watchCreateUser(),
    watchFetchAccount(),
    watchEditUser(),
    watchSetEditUser(),
    watchDeleteUser()
  ]
}
