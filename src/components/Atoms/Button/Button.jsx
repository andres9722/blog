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
    id={props.id}
    type='button'
  >
    {props.text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
