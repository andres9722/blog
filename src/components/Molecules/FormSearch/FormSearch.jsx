import React from 'react'
import { connect } from 'react-redux'
import InputForm from '../../Atoms/Input/Input'
import { getData } from '../../../state/actionCreators'
import './FormSearch.scss'

const FormSearch = ({ handleOnSearch }) => {
  return (
    <section className='form-container'>
      <form
        className='form-search'
        onSubmit={e => {
          e.preventDefault()
          handleOnSearch(e.target.username.value)
        }}
      >
        <h1 className='headline'>SEARCH</h1>
        <InputForm
          onChange={e => {
            if (e.target.value === '') {
              handleOnSearch('')
            }
          }}
          name='username'
          placeholder='Username...'
        />
      </form>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  handleOnSearch (username) {
    dispatch(getData(username))
  }
})

export default connect(null, mapDispatchToProps)(FormSearch)
