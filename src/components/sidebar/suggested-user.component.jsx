 import React, {useEffect, useState } from 'react'
import { getSuggestedUsers } from '../../services/firestore.services'
import User from './user.component'
import Skeleton from 'react-loading-skeleton';
import useUser from '../../hooks/use-user.hook'

const SuggestedUser = () => {
  const loggedInUser = useUser()
  const [suggestedUsers, setSuggestedUsers] = useState(null)

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      const users = await getSuggestedUsers(loggedInUser)
      setSuggestedUsers(users)
    }
    fetchSuggestedUsers()
  }, [loggedInUser])

  return (
    <section>
      <div className='text-sm mt-5'>
        <h4 className='text-gray-base font-semibold' >Suggestions For You</h4>
      </div>

      <div className='ml-1 mt-3'>
        { 
          suggestedUsers ? (
            suggestedUsers.map(user => <User key={user.uid} user={user} />
            )
          ) : (
              [...Array(5)].map((_, index) => (
                <Skeleton count={1} key={index} className='w-8 h-8' />
              ))
          ) 
        }
      </div>
    </section>
  )
}

export default SuggestedUser