import React from 'react'

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

export default SubmitForm
