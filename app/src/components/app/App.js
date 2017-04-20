import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from '../header/Header'

const history = createBrowserHistory()

class App extends Component {
    render () {
        return (
            <Router history={history}>
                <div>
                    <Header history={history}/>
                </div>
            </Router>
        )
    }
}

export default App