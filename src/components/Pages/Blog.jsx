import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from '../Templates/Posts/Posts'
import NewPost from '../Organisms/NewPost/NewPost'

/**
 * This page or component will be responsible for showing the post creation form, in addition to the search input and the list of posts found.
 */

const Blog = ({ posts }) => {
  return (
    <div className='l-container container container--auth'>
      <NewPost />
      <Posts posts={posts} />
    </div>
  )
}

Blog.propTypes = {
  posts: PropTypes.array
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Blog)
