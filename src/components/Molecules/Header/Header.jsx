import React from 'react'
import { connect } from 'react-redux'
import Button from '../../Atoms/Button/Button'
import { Link } from 'react-router-dom'
import './Header.scss'
import {
  onRedirectAuth,
  onLogout,
  getData
} from '../../../state/actionCreators'

const Header = ({
  handleOnRedirect,
  handleOnLogout,
  auth: { loggedIn, user }
}) => (
  <header className='header'>
    <div className='header-container l-container'>
      <Link className='header__link' to={loggedIn ? '/posts/' : '/blog/'}>
        BLOG
      </Link>
      {!loggedIn &&
        <Button text='Sign in' onClick={() => handleOnRedirect()} />}
      {loggedIn &&
        user &&
        <div className='header__profile'>
          <span>{user.login}</span>
          <img className='header__avatar' src={user.avatar_url} alt='' />
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
  },
  handleOnSearch (username) {
    dispatch(getData(username))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
