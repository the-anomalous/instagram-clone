import { useState, useEffect, useContext } from 'react'
import {getUserById} from '../services/firestore.services'
import UserAuthContext from '../contexts/user-auth.context'

const useUser = () => {
  const [activeUser, setActiveUser] = useState(null);
  const userAuth = useContext(UserAuthContext);

  useEffect(() => {
    const getUserData = async () => {
      if (userAuth?.uid) {
        const userData = await getUserById(userAuth.uid)
        setActiveUser(userData)
      }
    }
    getUserData()
  }, [userAuth?.uid])
  return activeUser
}

export default useUser