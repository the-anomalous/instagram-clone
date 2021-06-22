import React, { useState, useEffect, useContext } from 'react'
import Profile from '../../assets/profile.jpg'
import { ReactComponent as User} from '../../assets/icons/user.svg'
import { ReactComponent as Tick } from '../../assets/icons/tick.svg'
import ProfileModal from '../modal/profile-modal/profile-modal.component'
import AccountSkeleton from '../react-skeleton/account-skeleton';
import ProfileContext from '../../contexts/profile.context'
import useUser from '../../hooks/use-user.hook'
import { decreaseFollowing, increaseFollowing } from '../../services/firestore.services'
import routes from '../../constants/routes'
import { Link } from 'react-router-dom'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import CreatePostModal from '../modal/create-post-modal.component'

const ProfileHeader = () => {
  const activeUser = useUser()
  const [{ profile, photosCollection, followersCount, followingCount }] = useContext(ProfileContext)
  const { username, uid, profilePhotoURL, displayName, bio } = profile
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [isUserFollowingProfile, setIsUserFollowingProfile] = useState(false)
  const [isFollowerOpen, setIsFollowerOpen] = useState(false)
  const [isFollowingOpen, setIsFollowingOpen] = useState(false)
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)
  
  const onClick = async () => {
    setIsUserFollowingProfile(() => !isUserFollowingProfile)
    if (isUserFollowingProfile) {
      decreaseFollowing(loggedInUser.uid, uid)
    } else {
      increaseFollowing(loggedInUser.uid, uid)
    }
  }

  useEffect(() => {
    const checkUser = () => {
      uid && activeUser?.following.includes(uid) && setIsUserFollowingProfile(true)
      setLoggedInUser(activeUser)
    }
    checkUser()
  }, [activeUser, uid])

  if (loggedInUser) {
    return (
      <AccountSkeleton count={3} circleHeight={144} circleWidth={144} rowHeight={8} rowWidth={300} className='flex flex-row' />
    )
  } 
  return (
    <header className='grid grid-cols-3 max-w-screen-lg mb-11' >
      <section className='container col-start-1 col-end-2 flex items-center justify-center ' >
        <figure className='w-36 h-36' >
          <img src={profilePhotoURL || Profile} alt={`${username} profile`} className='w-full h-full rounded-full' />
        </figure>
      </section>
      <section className='container col-start-2 col-end-4 flex flex-col justify-around' >
        
        <div className="flex flex-row items-center">
          <h2 style={{fontSize:'28px'}} className='font-light' >{username}</h2>
          <div className='ml-5 flex flex-row items-center ' >
            {
              loggedInUser.uid === uid ? (
                <>
                  <button
                    className='focus:outline-none rounded border text-sm font-semibold outline-none'
                    style={{padding: '5px 9px'}}
                  >
                    <Link to={routes.EDIT_PROFILE} >Edit Profile</Link>
                  </button>
                  <button
                    className='focus:outline-none rounded border text-sm font-semibold outline-none ml-3'
                    style={{ padding: '3px' }}
                    onClick={() => setIsCreatePostOpen(true)}
                  >
                    <Plus/>
                  </button>
                  {isCreatePostOpen && <CreatePostModal setClose={() => setIsCreatePostOpen(false)} /> }
                </>
              ): (
                <button
                  className={` focus:outline-none rounded text-sm font-semibold ${isUserFollowingProfile ? 'border' : 'bg-blue-light text-white'}`}
                    style={{ padding: '5px 9px' }}
                    onClick={onClick}
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
            {photosCollection?.length <= 1 ? (
              <>
                <span className='font-semibold'>{photosCollection?.length}</span> post
              </>
            ) : (
              <>
                <span className='font-semibold'>{photosCollection?.length}</span> posts
              </>)}
          </li>
          <li style={{ marginRight: '6.4%' }} className='cursor-pointer' onClick={() => setIsFollowerOpen(true)}>
            {followersCount <= 1 ? (
              <>
                <span className='font-semibold'>{followersCount}</span> follower
               </>
            ) : (
              <><span className='font-semibold'>{followersCount}</span> followers</>)}
            {isFollowerOpen && <ProfileModal followers setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} setClose={() => setIsFollowerOpen(false)} />}
          </li>
          <li style={{ marginRight: '6.4%' }} className='cursor-pointer' onClick={() => setIsFollowingOpen(true)}>
            <>
            <span className='font-semibold'>{followingCount}</span> following
            </>
            {isFollowingOpen && <ProfileModal following setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} setClose={() => setIsFollowingOpen(false)} />}
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