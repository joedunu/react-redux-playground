import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import HeaderContainer from '../common/header/HeaderContainer'
import SignUpContainer from '../signUp/SignUpContainer'
import UsersListContainer from '../usersList/UsersListContainer'
import Footer from '../common/footer/Footer'
import ReactModal from '../reactModal/ReactModal'
import EditUserContainer from '../editUser/EditUserContainer'

class App extends Component {
  render () {
    const history = this.props.history

    return (
      <div>
        <HeaderContainer history={history} />
        <ConnectedRouter history={history}>
          <div>
            <Route
              path='/sign-up'
              component={SignUpContainer}
            />
            <Route exact path='/' component={UsersListContainer} />
            <Route
              path='/react-modal'
              component={ReactModal}
            />
            <Route path='/edit-user' component={EditUserContainer} />
          </div>
        </ConnectedRouter>
        <Footer />
      </div>
    )
  }}

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object.isRequired
}

export default connect()(App)
