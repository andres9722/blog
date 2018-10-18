import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader/Loader'
import Post from '../../Organisms/Post/Post'
import './Posts.scss'

const Posts = ({ posts: { posts, loading } }) => {
  return (
    <Fragment>
      {loading && <Loader />}
      <ul className='posts l-container'>
        {posts &&
          posts.map(
            post => post.description && <Post key={post.id} post={post} />
          )}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Posts)
