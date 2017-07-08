'use strict'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'

import App from './components/app/App'
import rootReducer from './reducers/index'

const rootElement = document.getElementById('app')

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(
  rootReducer,
  enhancer
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
