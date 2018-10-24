import React from 'react'
import './Modal.scss'

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

export default Modal
