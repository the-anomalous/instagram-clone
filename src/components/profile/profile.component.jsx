import React, {useReducer, useEffect} from 'react'
import { getPhotosById } from '../../services/firestore.services'
import ProfileContext from '../../contexts/profile.context'
import ProfileHeader from './profile-header.component'
import PostGrid from './post-grid.component'

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
    <div className='relative top-20 mx-auto max-w-5xl px-7 md:px-4 mobile-sm:px-1 ' >
      {
        profile && (
          <ProfileContext.Provider value={[{ profile, photosCollection, followersCount, followingCount}, dispatch]} >
            <ProfileHeader />
            <PostGrid/>
          </ProfileContext.Provider>
        )
      }
    </div>
  )
}

export default Profile