import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

import Header from '../common/header/Header'
import AddNewUserContainer from '../addNewUser/AddNewUserContainer'
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
          <AddNewUserContainer history={history} />
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
