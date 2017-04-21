import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app/App'
import exampleApp from './reducers/index'

const rootElement = document.getElementById('app')
let store = createStore(exampleApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
