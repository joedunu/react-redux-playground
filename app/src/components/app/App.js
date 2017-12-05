import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

import Header from '../common/header/Header'
import SignUpContainer from '../signUp/SignUpContainer'
import UsersListContainer from '../usersList/UsersListContainer'
import Footer from '../common/footer/Footer'
import ReactModal from '../reactModal/ReactModal'
import EditUserContainer from '../editUser/EditUserContainer'

const history = createBrowserHistory()

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <Route path='/sign-up' component={SignUpContainer} />
          <Route exact path='/' component={UsersListContainer} />
          <Route path='/react-modal' component={ReactModal} />
          <Route path='/edit-user' component={EditUserContainer} />
          <Footer />
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  store: PropTypes.object
}

export default connect()(App)
