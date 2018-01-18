// @flow

import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import HeaderContainer from '../common/header/HeaderContainer'
import SignUpContainer from '../signUp/SignUpContainer'
import UsersListContainer from '../usersList/UsersListContainer'
import Footer from '../common/footer/Footer'
import ReactModal from '../reactModal/ReactModal'
import EditUserContainer from '../editUser/EditUserContainer'

type AppProps = {
  store: Object,
  history: Object
}

const App = (props: AppProps) => {
  const history = props.history

  return (
    <div>
      <HeaderContainer history={history} />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/sign-up' component={SignUpContainer} />
          <Route exact path='/' component={UsersListContainer} />
          <Route path='/react-modal' component={ReactModal} />
          <Route path='/edit-user' component={EditUserContainer} />
        </Switch>
      </ConnectedRouter>
      <Footer />
    </div>
  )
}

const AppContainer = connect(null, null)(App)
export default AppContainer
