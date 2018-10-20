import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader/Loader'
import InputForm from '../../Atoms/Input/Input'
import Post from '../../Organisms/Post/Post'
import './Posts.scss'

const Posts = ({ posts: { posts, loading } }) => {
  return (
    <Fragment>
      {loading && <Loader />}
      <InputForm placeholder='Search...' />
      <ul>
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
