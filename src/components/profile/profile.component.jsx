import React, {useReducer, useEffect} from 'react'
import { getPhotosById } from '../../services/firestore.services'

const Profile = ({ user }) => {
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = {
    profile: {},
    photosCollection: null,
    followersCount: 0
  }

  const [{profile, photosCollection, followersCount}, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await getPhotosById(user?.uid)
      dispatch({profile:user, photosCollection:photos, followersCount: user?.followers.length})
    }

    getPhotos()
  }, [user])
  return (
    <div>
      i am {user?.username}
    </div>
  )
}

export default Profile
