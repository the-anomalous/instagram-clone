import React, {useState, useContext} from 'react'
import Profile from '../../assets/profile.jpg'
import UserAuthContext from '../../contexts/user-auth.context'
import { increaseFollowing } from '../../services/firestore.services'
import { Link } from 'react-router-dom'

const User = ({user}) => {
  const { username, profilePhotoURL, uid } = user
  const [clicked, setClicked] = useState(false)
  const [followed, setFollowed] = useState(false)
  const userAuth = useContext(UserAuthContext)

  const onClick = () => {
    setClicked(true);
    increaseFollowing(userAuth.uid, uid)
    setTimeout(() => setFollowed(true), 800)
  }

  return (
    !followed && (
      <div className='flex flex-row w-full mb-4 mt-1 ' >
        <Link to={`/profile/${username}`}>
          <figure className='mt-1 w-8 h-8 ' >
            <img src={profilePhotoURL || Profile} className='rounded-full w-full h-full ' alt={`${username} profile`} />
          </figure>
        </Link>
        <div className='flex-grow ml-3 flex flex-col' >
          <Link to={`/profile/${username}`}>
            <span className='font-semibold text-sm' >{username}</span>
          </Link>
          <span className='text-xs text-gray-base '>New to Instagram</span>
        </div>
        <div className='text-sm flex justify-center text-blue-light' style={{ paddingTop: '2px' }}>
          <button
            type='button'
            disabled={clicked}
            className='font-semibold btn-reset'
            onClick={onClick}
          >
              {clicked ? 'Following' : 'Follow'}</button>
        </div>
      </div>
    )
  )
}

export default User