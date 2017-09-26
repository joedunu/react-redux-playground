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
import Footer from '../common/footer/Footer'
import ReactModal from '../reactModal/ReactModal'
import EditUserContainer from '../editUser/EditUserContainer'

const history = createBrowserHistory()

class App extends Component {
  render () {
    // const {store} = this.props
    return (
      <Router history={history}>
        <div>
          <Header history={history} />
          <Route path='/add-user' component={AddNewUserContainer} />
          <Route exact path='/' component={VisibleUsersList} />
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
