import React from 'react'
import { connect } from 'react-redux'
import Posts from '../Templates/Posts/Posts'
import NewPost from '../Organisms/NewPost/NewPost'

const Blog = ({ posts }) => {
  return (
    <div className='l-container'>
      <NewPost />
      <Posts posts={posts} />
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Blog)
