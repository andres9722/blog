import React from 'react'
import PropTypes from 'prop-types'
import './Textarea.scss'

const Textarea = props => (
  <div className={props.classes}>
    <label className=''>{props.label}</label>
    <textarea
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
  </div>
)

Textarea.propTypes = {
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
  value: PropTypes.string
}

export default Textarea
