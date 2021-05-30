import { useState, useEffect } from 'react'
import {auth} from '../lib/firebase'

const useAuthListener = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        localStorage.setItem('user', JSON.stringify(userAuth))
        setUser(userAuth)
      } else {
        localStorage.removeItem('user')
        setUser(null)
      }

      return unsubscribe
    })
  }, [])

  return user
}

export default useAuthListener