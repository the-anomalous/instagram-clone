import React from 'react'

const Footer = ({ username, caption}) => {
  return (
    <div className='mx-4' >
      <span className='font-semibold -ml-1 mr-1' >{username}</span>
      <span>{caption}</span>
    </div>
  )
}

export default Footer
