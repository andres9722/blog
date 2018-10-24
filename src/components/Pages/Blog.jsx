import React from 'react'
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

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Blog)
