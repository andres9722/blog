import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getToken } from '../../state/actionCreators'
import Posts from '../Templates/Posts/Posts'

/**
 * This component is displayed when the user is not authenticated, you can only search for the posts by a username.
 */

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
      <div className='l-container container'>
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
