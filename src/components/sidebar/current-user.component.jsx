import React from 'react'
import Profile from '../../assets/profile.jpg'
import Skeleton from 'react-loading-skeleton';

const CurrentUser = ({userData, userAuth}) => {
  return (
    <>
      {
        userData ? (
          <section className='flex flex-row items-center mb-1' >
            <figure>
              <img src={userAuth?.photoURL ? userAuth.photoURL : Profile} alt="user avatar" className='rounded-full w-16 h-16 ' />
            </figure>

            <div className='flex flex-col justify-between mx-3 text-sm text-left ' >
              <span className='font-semibold' >{userData.username}</span>
              <span className='text-gray-base mt-1' >{userData.displayName}</span>
            </div>
          </section>
        ) : (
          <Skeleton count={1} height={100} />
        )
      }
    </>
  )
}

export default CurrentUser