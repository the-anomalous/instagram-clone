 import React, {useEffect, useState } from 'react'
import { getSuggestedUsers } from '../../services/firestore.services'
import User from './user.component'
import AccountSkeleton from '../react-skeleton/account-skeleton'
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
                <AccountSkeleton count={1} circleHeight={32} circleWidth={32} rowHeight={8} rowWidth={150} className='flex flex-row items-center mb-4' />
              ))
          ) 
        }
      </div>
    </section>
  )
}

export default SuggestedUser