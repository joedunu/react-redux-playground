'use strict'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import rootSaga from './sagas'
import AppContainer from './components/app/AppContainer'
import rootReducer from './reducers/index'

const rootElement = document.getElementById('app')

const history = createHistory()
const routingMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routingMiddleware]

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose // eslint-disable-line no-undef
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
    <AppContainer history={history} />
  </Provider>,
  rootElement
)
