import React from 'react'
import Profile from '../../assets/profile.jpg'

const User = ({user}) => {
  const { username, profilePhoto } = user

  return (
    <div className='flex flex-row w-full mb-4 mt-1 ' >
      <figure style={{paddingTop:'2px'}} >
        <img src={profilePhoto ? profilePhoto : Profile} className='rounded-full' width='34px' height='34px' alt="user profile" />
      </figure>
      <div className='flex-grow ml-3 flex flex-col' >
        <span className='font-semibold text-sm' >{username}</span>
        <span className='text-xs text-gray-base '>New to Instagram</span>
      </div>
      <div className='text-sm flex justify-center text-blue-light' style={{ paddingTop: '2px' }}>
        <button type='button' className='font-semibold'>Follow</button>
      </div>
    </div>
  )
}

export default User