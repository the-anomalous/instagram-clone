import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../../assets/profile.jpg'
import { getUserByUsername } from '../../../services/firestore.services'

const Comment = ({displayName, comment}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserByUsername(displayName)
      setUser(user[0])
    }
    getUser()
  }, [displayName])
  
  return (
    <li style={{ paddingBottom: '2px' }} className='text-sm mb-3 mt-1 mx-2 flex flex-row' >
      <figure>
        <img src={user?.profilePhotoURL || Profile} alt={`${displayName} profile avatar`} className='rounded-full w-8 h-8 ' />
      </figure>
      <div className='mx-2 mt-1 w-4/5 ' >
        <Link to={`/profile/${displayName}`} >
          <span className='font-semibold mr-1 ' >{displayName}</span>
        </Link>
        <span>{comment}</span>
      </div>
    </li>
  )
}

export default Comment
