import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './components/Utils/Routes'
import Header from './components/Molecules/Header/Header'
import './App.scss'

/**
 * This is the main component of the application, it will be responsible for containing the other components.
 */

const App = ({ auth: { loggedIn } }) => (
  <Router>
    <div className='App'>
      <Header />
      <Routes authed={loggedIn} />
    </div>
  </Router>
)

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(App)
