import { useState, useEffect, useContext } from 'react'
import UserAuthContext from '../contexts/user-auth.context'
import { getUserById, getPhotos } from '../services/firestore.services'

const usePhotos = () => {
  const [photos, setPhotos] = useState(null)
  const userAuth = useContext(UserAuthContext)

  useEffect(() => {
    const getTimelinePhotos = async () => {
      const { following } = await getUserById(userAuth.uid);
      const photosArray = await getPhotos(following, userAuth.uid)
      setPhotos(photosArray)
    }
    getTimelinePhotos()
  }, [userAuth?.uid])

  return {photos}
}

export default usePhotos