import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { getUserByUsername } from '../services/firestore.services'
import routes from '../constants/routes'
import Header from '../components/header/header.component'
import Profile from '../components/profile/profile.component'

const ProfilePage = () => {
  const { username } = useParams()
  const [user, setUser] = useState(undefined)
  const history = useHistory()
  
  useEffect(() => document.title = `Instagram - ${username}`, [username])
  
  useEffect(() => {
    const getUser = async () => {
      const user = await getUserByUsername(username)
      if (user?.length > 0) {
        setUser(user[0])
      } else {
        history.push(routes.NOT_FOUND)
      }
    }
    getUser()
  }, [username, history])


  return (
    user ? (
    <>
      <Header/>
      <Profile user={user} />
    </>
    ) : null
  )
}

export default ProfilePage