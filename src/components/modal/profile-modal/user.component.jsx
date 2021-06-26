import React, {useState, useContext} from 'react'
import Profile from '../../../assets/profile.jpg'
import { useHistory } from 'react-router-dom';
import { decreaseFollowing, increaseFollowing } from '../../../services/firestore.services';
import ProfileContext from '../../../contexts/profile.context'

const User = ({ username, profilePhotoURL, userId, loggedInUser, setLoggedInUser, setClose}) => {
  const history = useHistory()
  const [userData, dispatch] = useContext(ProfileContext)
  const [following, setFollowing] = useState(loggedInUser.following.includes(userId))
  
  const onClick = async () => {
    setFollowing(() => !following)
    const { profile } = userData;
    if (following) {
      const {following, followers} = await decreaseFollowing(loggedInUser.uid, userId)
      
      if (profile.uid === loggedInUser.uid) {
        dispatch({ ...userData, profile: { ...profile, following, followers}, followingCount: following.length, followersCount: followers.length })
      }
      setLoggedInUser({ ...loggedInUser, following, followers})
    } else {
      const { following, followers } = await increaseFollowing(loggedInUser.uid, userId)

      if (profile.uid === loggedInUser.uid) {
        dispatch({ ...userData, profile: { ...profile, following, followers }, followingCount: following.length, followersCount: followers.length })
      }
      setLoggedInUser({ ...loggedInUser, following, followers })
    }
  }

  return (
    <div className='grid grid-cols-5 self-center' style={{ marginBottom: '14px' }} >
      <figure className='w-full flex justify-center col-start-1 col-end-2 content-center' >
        <img src={profilePhotoURL || Profile} alt={`${username} profile`} className='rounded-full w-8 h-8' />
      </figure>
      <span
        className='text-sm font-semibold col-start-2 col-end-5 flex items-center cursor-pointer'
        onClick={() => {
          console.log(setClose)
          history.push(`/profile/${username}`)
        } }>
        {username}
      </span>
      {
        loggedInUser.uid !== userId && (
          <button
            className='col-start-5 col-end-6 text-sm text-blue-light font-semibold btn-reset'
            onClick={onClick}
          >
            {following ? 'unfollow' : 'follow'}
          </button>
        )
      }
    </div>
  )
}

export default User