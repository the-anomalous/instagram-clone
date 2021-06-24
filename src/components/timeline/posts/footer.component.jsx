import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ username, caption}) => {
  return (
    <footer className='ml-3 mr-4' >
      <Link to={`/profile/${username}`} >
        <span className='font-semibold mr-1' >{username}</span>
      </Link>
      <figcaption className='inline' >{caption}</figcaption>
    </footer>
  )
}

export default Footer