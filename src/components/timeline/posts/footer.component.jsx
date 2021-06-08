import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ username, caption}) => {
  return (
    <footer className='mx-4' >
      <Link to={`/profile/${username}`} >
        <span className='font-semibold -ml-1 mr-1' >{username}</span>
      </Link>
      <span>{caption}</span>
    </footer>
  )
}

export default Footer