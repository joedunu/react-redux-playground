import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from '../common/header/Header'
import UserRegistrationForm from '../userRegistrationForm/UserRegistrationForm'

const history = createBrowserHistory()

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <UserRegistrationForm history={history} />
        </div>
      </Router>
    )
  }
}

export default App
