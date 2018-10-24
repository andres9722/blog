import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

/**
 * This is an react component that that represents a personalized input for the forms, etc.
 */

const InputForm = props => (
  <Fragment>
    <input
      onChange={props.onChange}
      value={props.value}
      id={props.id}
      className={'input ' + props.theme}
      type={props.type}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      defaultValue={props.default}
      autoComplete={props.autoComplete}
      disabled={props.disabled}
      ref={props.ref}
    />
  </Fragment>
)

InputForm.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  theme: PropTypes.string
}

export default InputForm
