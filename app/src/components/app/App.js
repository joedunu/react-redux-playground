import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

import Header from '../common/header/Header'
import AddNewUser from '../addNewUser/AddNewUser'
import VisibleUsersList from '../../containers/VisibleUsersList'
import Footer from '../footer/Footer'
import ReactModal from '../reactModal/ReactModal'

const history = createBrowserHistory()

class App extends Component {
  render () {
    // const {store} = this.props
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <AddNewUser history={history} />
          <VisibleUsersList />
          <Footer />
          <Route path='/react-modal' component={ReactModal} />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  store: PropTypes.object
}

export default connect()(App)
