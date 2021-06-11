import React, { useState, useEffect } from 'react'
import useUser from '../../hooks/use-user.hook'
import Profile from '../../assets/profile.jpg'
import { ReactComponent as User} from '../../assets/icons/user.svg'
import { ReactComponent as Tick } from '../../assets/icons/tick.svg'
import ProfileModal from '../modal/profile-modal.component'

const ProfileHeader = ({ profile: { username, uid, photoURL, following, followers, displayName, bio}, photosCount, followersCount, dispatch }) => {
  const loggedInUser = useUser()
  const [isLoggedInUser, setIsLoggedInUser] = useState(false)
  const [isUserFollowingProfile, setIsUserFollowingProfile] = useState(false)
  const [isFollowerOpen, setIsFollowerOpen] = useState(false)
  const [isFollowingOpen, setIsFollowingOpen] = useState(false)

  useEffect(() => {
    const checkUser = () => {
      username && loggedInUser?.username === username && setIsLoggedInUser(true)
      uid && loggedInUser?.following.includes(uid) && setIsUserFollowingProfile(true)
    }
    checkUser()
  }, [username, loggedInUser, uid])

  return (
    <header className='mx-auto max-w-5xl grid grid-cols-3 max-w-screen-lg ' >
      <section className='container col-start-1 col-end-2 flex items-center justify-center ' >
        <figure className='w-36 h-36' >
          <img src={photoURL || Profile} alt={`${username} avatar`} className='w-full h-full rounded-full' />
        </figure>
      </section>
      <section className='container col-start-2 col-end-4 flex flex-col justify-around' >
        <div className="flex flex-row items-center">
          <h2 style={{fontSize:'28px'}} className='font-light' >{username}</h2>
          <div className='ml-5' >
            {
              isLoggedInUser ? (
                <button
                  className='focus:outline-none rounded border text-sm font-semibold outline-none'
                  style={{padding: '5px 9px'}}
                >
                  Edit Profile
                </button>
              ): (
                <button
                  className={` focus:outline-none rounded text-sm font-semibold ${isUserFollowingProfile ? 'border' : 'bg-blue-light text-white'}`}
                  style={{padding: '5px 9px'}}
                >
                  {isUserFollowingProfile ? (
                    <div className='flex flex-row' >
                      <User />
                      <Tick className='text-black-faded h-4 w-4' />
                    </div>
                  ) : 'Follow'}
                </button> 
              )
            }
          </div>
        </div>
        <ul className="flex flex-row">
          <li style={{ marginRight: '6.4%' }} >
            {photosCount <= 1 ? (
              <><span className='font-semibold'>{photosCount}</span> post</> 
            ) : (
              <><span className='font-semibold'>{photosCount}</span> posts</>)}
          </li>
          <li style={{ marginRight: '6.4%' }} className='cursor-pointer' onClick={() => setIsFollowerOpen(true)}>
            {followersCount <= 1 ? (
              <><span className='font-semibold'>{followersCount}</span> follower</>
            ) : (
              <><span className='font-semibold'>{followersCount}</span> followers</>)}
            {isFollowerOpen && <ProfileModal followers={followers} loggedInUser={loggedInUser} setClose={() => setIsFollowerOpen(false)} />}
          </li>
          <li style={{ marginRight: '6.4%' }} className='cursor-pointer' onClick={() => setIsFollowingOpen(true)}>
            <>
            <span className='font-semibold'>{following?.length}</span> following
            </>
            {isFollowingOpen && <ProfileModal following={following} loggedInUser={loggedInUser} setClose={() => setIsFollowingOpen(false)} />}
          </li>
        </ul>
        <div className="flex flex-col">
          <h1 className=' text-lg font-semibold'>{displayName}</h1>
          <span>{bio}</span>
        </div>
      </section>
    </header>
  )
}

export default ProfileHeader