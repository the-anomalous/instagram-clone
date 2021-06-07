import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../../assets/profile.jpg'

const Header = ({ username, profilePhoto }) => (
  <div className='p-3 flex-row flex border-b border-gray-primary items-center'>
    <Link to={`/profile/${username}`}>
      <figure>
        <img src={profilePhoto || Profile} alt={`${username} profile avatar`} className='w-8 h-8 rounded-full mr-2 ml-1' />
      </figure>
    </Link>
    <Link to={`/profile/${username}`}>
      <span className='inline-block font-semibold' >{username}</span>
    </Link>
  </div>
)

export default Header
