import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

/**
 * This is an react component that that represents a button.
 */

const Button = props => (
  <button
    className={'button ' + props.theme}
    onClick={props.onClick}
    type='button'
  >
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string
}

export default Button
