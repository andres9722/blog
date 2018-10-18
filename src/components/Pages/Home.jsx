import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getToken } from '../../state/actionCreators'

class Home extends Component {
  componentDidMount () {
    const { getToken } = this.props
    const code = this.props.location.search.replace('?code=', '')
    if (code) {
      getToken(code)
    }
  }

  render () {
    return (
      <div>
        Hi
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getToken (code) {
    dispatch(getToken(code))
  }
})

export default connect(null, mapDispatchToProps)(Home)
