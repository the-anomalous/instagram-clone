import { useState, useEffect, useContext } from 'react'
import UserAuthContext from '../contexts/user-auth.context'
import { getUserById, getPhotos } from '../services/firestore.services'

const usePhotos = () => {
  const [photos, setPhotos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const userAuth = useContext(UserAuthContext)

  useEffect(() => {
    const getTimelinePhotos = async () => {
      try {
        const { following } = await getUserById(userAuth.uid);
        if (following.length > 0) {
          const {photos} = await getPhotos(following, userAuth.uid)
          photos.sort((a, b) => b.dateCreated - a.dateCreated)
          setPhotos(photos)
          setLoading(false)
        } else {
          setPhotos([])
          setLoading(false)
        }
      } catch (error) {
        setError(true)
      }
    }
    getTimelinePhotos()
  }, [userAuth?.uid])

  return {photos, loading, error}
}

export default usePhotos