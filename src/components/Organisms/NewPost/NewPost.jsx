import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputForm from '../../Atoms/Input/Input'
import Loader from '../../Atoms/Loader/Loader'
import SubmitForm from '../../Atoms/Input/SubmitForm'
import Textarea from '../../Atoms/Textarea/Textarea'
import info from '../../../data/createPost.json'
import { createPost } from '../../../state/actionCreators'

class NewPost extends Component {
  handleOnSubmit = e => {
    e.preventDefault()
    const { handleOnCreatePost, auth: { token, user } } = this.props
    const form = e.target
    const filename = form.filename.value
    const description = form.description.value
    const content = form.content.value

    const post = {
      description,
      public: true,
      files: {
        'filename.md': {
          content
        }
      }
    }

    handleOnCreatePost(post, token, user)
  }

  render () {
    const { entityTitle, entityFields } = info
    const { post: { loading } } = this.props
    return (
      <section className='form-container'>
        <h1 className='headline'>{entityTitle}</h1>
        <form className='general-form' onSubmit={this.handleOnSubmit}>
          {entityFields.map(field => {
            if (field.kind === 'input') {
              return (
                <InputForm
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  key={field.id}
                  required
                />
              )
            }
            if (field.kind === 'textarea') {
              return (
                <Textarea
                  label={field.label}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  key={field.id}
                  required
                  cols='30'
                  rows='10'
                />
              )
            }

            return null
          })}
          {loading && <Loader />}
          <SubmitForm theme='button--secondary' text='Publish' />
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleOnCreatePost (post, token, user) {
    dispatch(createPost(post, token, user))
  }
})

const mapStateToProps = ({ auth, post }) => ({ auth, post })

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
