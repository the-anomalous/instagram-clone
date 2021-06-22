import React from 'react'
import Profile from '../../assets/profile.jpg'
import AccountSkeleton from '../react-skeleton/account-skeleton';
import { Link } from 'react-router-dom'

const CurrentUser = ({userData}) => {
  return (
    <>
      {
        userData ? (
          <section className='flex flex-row items-center mb-1 sm:hidden md:hidden mobile-sm:hidden' >
            <Link to={`/profile/${userData.username}`}>
              <figure>
                <img src={userData?.profilePhotoURL || Profile} alt="user avatar" className='rounded-full w-16 h-16 ' />
              </figure>
            </Link>

            <div className='flex flex-col justify-between mx-3 text-sm text-left ' >
              <Link to={`/profile/${userData.username}`}>
                <span className='font-semibold' >{userData.username}</span>
              </Link>
              <span className='text-gray-base mt-1' >{userData.displayName}</span>
            </div>
          </section>
        ) : (
          <AccountSkeleton count={2} circleHeight={64} circleWidth={64} rowHeight={8} rowWidth={120} className='sm:hidden md:hidden mobile-sm:hidden flex flex-row ' />
        )
      }
    </>
  )
}

export default CurrentUser