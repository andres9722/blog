import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = props => (
  <button
    className={'button ' + props.className}
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
