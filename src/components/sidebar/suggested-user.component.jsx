import React, { useContext, useEffect, useState } from 'react'
import UserAuthContext from '../../contexts/user-auth.context'
import { getSuggestedUsers } from '../../services/firestore.services'
import User from './user.component'
import Skeleton from 'react-loading-skeleton';
import { range } from 'lodash';

const SuggestedUser = () => {
  const userAuth = useContext(UserAuthContext)
  const [suggestedUsers, setSuggestedUsers] = useState(null)

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      const users = await getSuggestedUsers(userAuth)
      setSuggestedUsers(users)
    }
    fetchSuggestedUsers()
  }, [userAuth])

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
            range(5).map(() => <Skeleton count={2} />)
          )
        }
      </div>
    </section>
  )
}

export default SuggestedUser