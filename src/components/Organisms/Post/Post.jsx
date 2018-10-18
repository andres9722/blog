import React from 'react'
import { Link } from 'react-router-dom'
import './Post.scss'

const Post = ({ post, large }) => {
  return (
    <li className='posts-item'>
      <div className='posts-item__profile'>
        <img
          className='posts-item__avatar'
          src={post.owner.avatar_url && post.owner.avatar_url}
          alt='avatar url'
        />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={post.owner.html_url}
          className='posts-item__author'
        >
          {post.owner.login}
        </a>
      </div>
      <Link to={`/post/${post.id}`}>
        <div className='posts-item__content'>
          <span className='posts-item__description'>{post.description}</span>
        </div>
      </Link>
      {large &&
        <div>
          <ul>
            <li>Date</li>
            {post.updated_at}
          </ul>
        </div>}
    </li>
  )
}

export default Post
