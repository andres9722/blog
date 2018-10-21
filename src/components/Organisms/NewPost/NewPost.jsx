import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from '../../Atoms/Input/Input'
import Loader from '../../Atoms/Loader/Loader'
import SubmitForm from '../../Atoms/Input/SubmitForm'
import Textarea from '../../Atoms/Textarea/Textarea'
import info from '../../../data/createPost.json'
import { createPost, updatePost } from '../../../state/actionCreators'
import './NewPost.scss'

class NewPost extends Component {
  handleOnSubmit = e => {
    e.preventDefault()
    const {
      handleOnCreatePost,
      handleOnUpdatePost,
      auth: { token, user },
      update,
      postToUpdate
    } = this.props
    const form = e.target
    const description = form.description.value
    const content = form.content.value

    const post = {
      description,
      public: true,
      files: {
        'post.md': {
          content
        }
      }
    }

    if (update) {
      handleOnUpdatePost(postToUpdate.id, post, token)
    } else {
      handleOnCreatePost(post, token, user)
    }
  }

  render () {
    const { entityTitle, updateEntityTitle, entityFields } = info
    const { post: { loading, message }, update, postToUpdate } = this.props
    console.log()
    return (
      <section className='form-container'>
        <h1 className='headline'>
          {!update ? entityTitle : updateEntityTitle}
        </h1>
        <form className='form' onSubmit={this.handleOnSubmit}>
          {entityFields.map(field => {
            if (field.kind === 'input') {
              return (
                <InputForm
                  type={field.type}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  key={field.id}
                  required
                  default={postToUpdate && postToUpdate[field.name]}
                />
              )
            }
            if (field.kind === 'textarea') {
              return (
                <Textarea
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  key={field.id}
                  required
                  default={
                    postToUpdate &&
                      postToUpdate.files &&
                      postToUpdate.files['post.md'] &&
                      postToUpdate.files['post.md'].content
                  }
                />
              )
            }

            return null
          })}
          {loading && <Loader />}
          {message && <p> {message} </p>}
          <SubmitForm theme='button--secondary' text='Publish' />
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnCreatePost (post, token, user) {
    dispatch(createPost(post, token, user))
  },
  handleOnUpdatePost (id, post, token) {
    dispatch(updatePost(id, post, token))
  }
})

const mapStateToProps = ({ auth, post }) => ({ auth, post })

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
