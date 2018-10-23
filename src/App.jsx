import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './components/Utils/Routes'
import Header from './components/Molecules/Header/Header'
import './App.scss'

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
