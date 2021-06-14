import React, {useReducer, useEffect} from 'react'
import { getPhotosById } from '../../services/firestore.services'
import Skeleton from 'react-loading-skeleton';
import ProfileContext from '../../contexts/profile.context'
import ProfileHeader from './profile-header.component'
import Posts from './posts.component'

const Profile = ({ user }) => {
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = {
    profile: null,
    loggedInUser: null,
    photosCollection: null,
    followersCount: 0,
    followingCount: 0
  }

  const [{ profile, photosCollection, followersCount, followingCount}, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await getPhotosById(user.uid)
      dispatch({ profile: user, photosCollection: photos, followersCount: user?.followers.length, followingCount: user?.following.length})
    }

    getPhotos()
  }, [user])
  return (
    <div className='relative top-20 mx-auto max-w-5xl px-7 ' >
      {
        profile ? (
          <ProfileContext.Provider value={[{ profile, photosCollection, followersCount, followingCount}, dispatch]} >
            <ProfileHeader />
            <Posts/>
          </ProfileContext.Provider>
        ) : (
          <Skeleton count={1} />
        )
      }
    </div>
  )
}

export default Profile