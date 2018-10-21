import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../Organisms/Post/Post'
import Loader from '../Atoms/Loader/Loader'
import API from '../../api/api'
import arrow from '../../assets/right-arrow.svg'

class PostDetail extends Component {
  state = {
    post: null,
    loading: null,
    index: null
  }

  getPost = async params => {
    this.setState({
      loading: true,
      post: null
    })

    try {
      let { data } = await API.get(`gists/${params.id}`)
      const { posts: { posts } } = this.props

      this.setState({
        post: data,
        loading: false,
        index: posts.findIndex(s => s.id === data.id) + 1
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount () {
    const { match: { params } } = this.props

    this.getPost(params)
  }

  componentWillReceiveProps (nextProps) {
    const { match: { params } } = nextProps

    this.getPost(params)
  }

  render () {
    const { post, loading } = this.state
    const { posts: { posts } } = this.props

    return (
      <div className='l-container container'>
        {posts[this.state.index] &&
          <Link className='next' to={`/post/${posts[this.state.index].id}`}>
            <img className='next__img' src={arrow} alt='arrow' />
          </Link>}
        {post && <Post large post={post} />}
        {loading && <div className='posts-item__loader'><Loader /></div>}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(PostDetail)
