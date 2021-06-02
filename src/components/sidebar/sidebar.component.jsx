import React, {useContext} from 'react'
import useUser from '../../hooks/use-user.hook'
import UserAuthContext from '../../contexts/user-auth.context'
import CurrentUser from './current-user.component'
import SuggestedUser from './suggested-user.component'

const Sidebar = () => {
  const userData = useUser()
  const userAuth = useContext(UserAuthContext)

  return (
    <section className='col-start-3 col-end-4 p-2' >
      <CurrentUser userAuth={userAuth} userData={userData} />
      <SuggestedUser/>
    </section>
  )
}

export default Sidebar