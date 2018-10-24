import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../Organisms/Post/Post'
import Loader from '../Atoms/Loader/Loader'
import API from '../../api/api'
import arrow from '../../assets/right-arrow.svg'

/**
 * This component is responsible for displaying the full details of any publication, in addition to the possibility of browsing to subsequent publications associated with the same searched user.
 */

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

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.object
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(PostDetail)
