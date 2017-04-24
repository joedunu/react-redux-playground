import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

import App from './components/app/App'
import exampleApp from './reducers/index'

const rootElement = document.getElementById('app')

let sagaMiddleware = createSagaMiddleware()
let store = createStore(exampleApp,
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  rootElement
)
