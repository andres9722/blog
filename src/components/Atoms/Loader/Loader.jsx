import React from 'react'
import './Loader.scss'

/**
 * This is a react component that represents a spinner to show while loading external resources.
 */

const Loader = () => (
  <div className='spinner'>
    <div className='dot1' />
    <div className='dot2' />
  </div>
)

export default Loader
