import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './components/Utils/Routes'
import Header from './components/Molecules/Header/Header'
import { getData } from './state/actionCreators'

import './App.scss'
import Posts from './components/Templates/Posts/Posts'

class App extends Component {
  componentDidMount () {
    const { getData } = this.props
    getData()
  }

  render () {
    const { posts, auth: { loggedIn } } = this.props
    return (
      <Router>
        <div className='App'>
          <Header />
          <Posts posts={posts} />
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

const mapStateToProps = ({ posts, auth }) => ({ posts, auth })

export default connect(mapStateToProps, mapDispatchToProps)(App)
