import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

/**
 * This component will be useful to open windows and display a message or certain information to the user that stands out with respect to the content of the application.
 */

const Modal = ({ show, closeModal, children }) => {
  return (
    <div id='modal' className={show ? 'modal--show modal' : 'modal'}>
      <div className='modal__content'>
        <span className='modal__close' onClick={closeModal}>
          <span className='icon-close icon' />
          x
        </span>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.element
}

export default Modal
