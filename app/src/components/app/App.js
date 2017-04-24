import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

import Header from '../common/header/Header'
import AddNewUser from '../addNewUser/AddNewUser'
import VisibleUsersList from '../../containers/VisibleUsersList'
import Footer from '../footer/Footer'

const history = createBrowserHistory()

class App extends Component {
  render () {
    const {store} = this.props
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <AddNewUser history={history} store={store} />
          <VisibleUsersList store={store} />
          <Footer />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  store: PropTypes.object
}

export default App
