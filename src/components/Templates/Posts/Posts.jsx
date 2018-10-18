import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader/Loader'

const Posts = ({ posts: { posts, loading } }) => {
  return (
    <Fragment>
      {loading && <Loader />}
      <ul>
        {posts &&
          posts.map(
            post =>
              post.description &&
              <li key={post.id}>
                <img
                  style={{ width: '30px', display: 'inline' }}
                  src={post.owner.avatar_url}
                  alt='avatar url'
                />
                <span>{post.description}</span>
              </li>
          )}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Posts)
