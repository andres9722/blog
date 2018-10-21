import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './components/Utils/Routes'
import Header from './components/Molecules/Header/Header'
import './App.scss'

class App extends Component {
  render () {
    const { auth: { loggedIn } } = this.props
    return (
      <Router>
        <div className='App'>
          <Header />
          <Routes authed={loggedIn} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(App)
