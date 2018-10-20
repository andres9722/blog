import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getToken } from '../../state/actionCreators'
import Posts from '../Templates/Posts/Posts'

class Home extends Component {
  componentDidMount () {
    const { getToken } = this.props
    const code = this.props.location.search.replace('?code=', '')
    if (code) {
      getToken(code)
    }
  }

  render () {
    const { posts } = this.props
    return (
      <div className='l-container'>
        <Posts posts={posts} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getToken (code) {
    dispatch(getToken(code))
  }
})

const mapStateToProps = ({ auth, posts }) => ({ auth, posts })

export default connect(mapStateToProps, mapDispatchToProps)(Home)
