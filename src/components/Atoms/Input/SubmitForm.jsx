import React from 'react'
import PropTypes from 'prop-types'

/**
 * This is an react component that that represents an input of type submit for the forms.
 */

const SubmitForm = props => (
  <div>
    <input
      type='submit'
      className={'button ' + props.theme}
      value={props.text}
      disabled={props.disabled}
    />
  </div>
)

SubmitForm.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default SubmitForm
