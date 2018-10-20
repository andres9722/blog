import React from 'react'
import { connect } from 'react-redux'
import Button from '../../Atoms/Button/Button'
import { Link } from 'react-router-dom'
import './Header.scss'
import { onRedirectAuth, onLogout } from '../../../state/actionCreators'

const Header = ({
  handleOnRedirect,
  handleOnLogout,
  auth: { loggedIn, user }
}) => (
  <header className='header'>
    <div className='header-container l-container'>
      <div className='header-container__main'>
        <h1 className='header-container__logo'>BLOG</h1>
        <Link className='header-container__link' to={loggedIn ? '/posts' : '/'}>
          All posts
        </Link>
      </div>
      {!loggedIn &&
        <Button text='Sign in' onClick={() => handleOnRedirect()} />}
      {loggedIn &&
        user &&
        <div style={{ display: 'flex' }}>
          <img
            style={{ width: '40px', marginRight: '20px' }}
            src={user.avatar_url}
            alt=''
          />
          <Button text='Logout' onClick={() => handleOnLogout()} />
        </div>}
    </div>
  </header>
)

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => ({
  handleOnRedirect () {
    dispatch(onRedirectAuth())
  },
  handleOnLogout () {
    dispatch(onLogout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
