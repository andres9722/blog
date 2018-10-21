import React from 'react'
import { connect } from 'react-redux'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import Button from '../../Atoms/Button/Button'
import NewPost from '../NewPost/NewPost'
import Modal from '../../Organisms/Modal/Modal'
import './Post.scss'
import { showModal } from '../../../state/actionCreators'

const Post = ({ post, large, auth, ui: { showModal }, handleOnShowModal }) => {
  return (
    <li className={large ? 'posts-item posts-item--large' : 'posts-item'}>
      <h6>
        {new Date(post.updated_at).toDateString().slice(4)}
        {' '}
        -
        {' '}
        <TimeAgo date={post.updated_at} />
      </h6>
      <div className='posts-item__content'>
        <p className='posts-item__description'>{post.description}</p>
        {!large &&
          <div className='posts-item__post'>
            <Link className='posts-item__link' to={`/post/${post.id}`}>
              Read
            </Link>
          </div>}
      </div>
      {post.owner &&
        auth.user &&
        post.owner.login === auth.user.login &&
        large &&
        <Button
          onClick={handleOnShowModal}
          theme='button--secondary posts-item--edit'
          text='Edit'
        />}
      {large &&
        <div>
          {Object.values(post.files).map((text, i) => (
            <div key={i} className='posts-item__text'>
              <Markdown source={text.content} />
            </div>
          ))}
        </div>}
      <Modal show={showModal} closeModal={handleOnShowModal}>
        <NewPost update postToUpdate={post} />
      </Modal>
    </li>
  )
}

const mapStateToProps = ({ auth, ui }) => ({ auth, ui })

const mapDispatchToProps = dispatch => ({
  handleOnShowModal () {
    dispatch(showModal())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
