import React from 'react'
import { connect } from 'react-redux'
import Posts from '../Templates/Posts/Posts'

const Blog = ({ posts }) => {
  return (
    <div>
      <Posts posts={posts} />
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Blog)
