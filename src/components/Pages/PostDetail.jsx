import React, { Component } from 'react'
import Post from '../Organisms/Post/Post'
import Loader from '../Atoms/Loader/Loader'
import API from '../../api/api'

class PostDetail extends Component {
  state = {
    post: null,
    loading: null
  }

  async componentDidMount () {
    const { match: { params } } = this.props

    this.setState({
      loading: true
    })

    try {
      let { data } = await API.get(`gists/${params.id}`)

      this.setState({
        post: data,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { post, loading } = this.state

    return (
      <div className='l-container'>
        {loading && <Loader />}
        {post && <Post large post={post} />}
      </div>
    )
  }
}

export default PostDetail
