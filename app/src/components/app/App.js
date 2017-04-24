import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from '../common/header/Header'
import AddNewUser from '../addNewUser/AddNewUser'
import VisibleUsersList from '../../containers/VisibleUsersList'
import Footer from '../footer/Footer'

const history = createBrowserHistory()

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <AddNewUser history={history} />
          <VisibleUsersList />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
