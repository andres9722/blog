import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Organisms/Post/Post'

class PostDetail extends Component {
  render () {
    const { posts: { posts }, match: { params } } = this.props
    const post = posts.find(item => item.id === params.id)
    return (
      <div>
        <Post large post={post} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
export default connect(mapStateToProps)(PostDetail)
