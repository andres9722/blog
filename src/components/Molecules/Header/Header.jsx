import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../../Atoms/Button/Button'
import { Link } from 'react-router-dom'
import './Header.scss'
import {
  onRedirectAuth,
  onLogout,
  getData
} from '../../../state/actionCreators'

/**
 * This component will be displayed on all pages of the application, it is useful to navigate to the main page and to authenticate the user.
 */

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

Header.propTypes = {
  handleOnRedirect: PropTypes.func.isRequired,
  handleOnLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

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
