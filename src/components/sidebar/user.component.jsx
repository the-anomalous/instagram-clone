import React, {useState, useContext} from 'react'
import Profile from '../../assets/profile.jpg'
import UserAuthContext from '../../contexts/user-auth.context'
import { increaseFollowers, increaseFollowing } from '../../services/firestore.services'
import { Link } from 'react-router-dom'

const User = ({user}) => {
  const { username, profilePhoto, uid } = user
  const [clicked, setClicked] = useState(false)
  const [followed, setFollowed] = useState(false)
  const userAuth = useContext(UserAuthContext)

  const onClick = () => {
    setClicked(true);
    increaseFollowers(userAuth.uid, uid)
    increaseFollowing(userAuth.uid, uid)
    setTimeout(() => setFollowed(true), 800)
  }

  return (
    !followed && (
      <div className='flex flex-row w-full mb-4 mt-1 ' >
        <Link to={`/profile/${username}`}>
          <figure style={{paddingTop:'2px'}} >
            <img src={profilePhoto || Profile} className='rounded-full' width='34px' height='34px' alt="user profile" />
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