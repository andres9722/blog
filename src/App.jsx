import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './components/Utils/Routes'
import Header from './components/Molecules/Header/Header'
import { getData } from './state/actionCreators'
import './App.scss'

class App extends Component {
  componentDidMount () {
    const { getData } = this.props
    getData()
  }

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

const mapDispatchToProps = dispatch => ({
  getData () {
    dispatch(getData())
  }
})

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, mapDispatchToProps)(App)
