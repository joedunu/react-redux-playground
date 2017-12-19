'use strict'

import { connect } from 'react-redux'
import {push} from 'react-router-redux'
import Header from './Header'

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: (location) => {
      dispatch(push(location))
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
