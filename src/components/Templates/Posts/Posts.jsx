import React from 'react'
import { connect } from 'react-redux'
import Loader from '../../Atoms/Loader/Loader'
import Post from '../../Organisms/Post/Post'
import './Posts.scss'
import FormSearch from '../../Molecules/FormSearch/FormSearch'

/**
 * This component is responsible for displaying the list of summarized publications of a particular user.
 */

export const Posts = ({ posts: { posts, loading, error } }) => {
  return (
    <div>
      <FormSearch posts={!!posts} />
      {posts &&
        posts[0] &&
        <div className='user-info'>
          <img
            className='posts-item__avatar'
            src={posts[0].owner.avatar_url && posts[0].owner.avatar_url}
            alt='avatar url'
          />
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={posts[0].owner.html_url}
            className='posts-item__author'
          >
            {posts[0].owner.login}
          </a>
        </div>}
      <ul className={posts ? 'posts posts--show' : 'posts'}>
        <h5>POSTS</h5>
        {posts &&
          posts.map(
            post => post.description && <Post key={post.id} post={post} />
          )}
      </ul>
      {loading && <div className='loader'><Loader /></div>}
      {posts && !posts.length && <p>'Not post'</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Posts)
