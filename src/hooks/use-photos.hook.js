import { useState, useEffect, useContext } from 'react'
import UserAuthContext from '../contexts/user-auth.context'
import { getUserById, getPhotos } from '../services/firestore.services'

const usePhotos = () => {
  const [photos, setPhotos] = useState(null)
  const userAuth = useContext(UserAuthContext)

  useEffect(() => {
    const getTimelinePhotos = async () => {
      const { following } = await getUserById(userAuth.uid);
      const {photos} = await getPhotos(following, userAuth.uid)
      photos.sort((a, b) => b.dateCreated - a.dateCreated)
      setPhotos(photos)
    }
    getTimelinePhotos()
  }, [userAuth?.uid])

  return {photos}
}

export default usePhotos