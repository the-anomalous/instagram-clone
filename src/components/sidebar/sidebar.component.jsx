import React, {useContext} from 'react'
import useUser from '../../hooks/use-user.hook'
import UserAuthContext from '../../contexts/user-auth.context'
import CurrentUser from './current-user.component'
import SuggestedUser from './suggested-user.component'

const Sidebar = () => {
  const userData = useUser()
  const userAuth = useContext(UserAuthContext)

  return (
    <section className='col-start-3 col-end-4 p-2 relative sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-3 mobile-sm:col-start-1 mobile-sm:col-end-3 md:flex md:justify-center' >
      <div className='fixed w-sidebar sm:static md:static mobile-sm:static sm:w-full mobile-sm:w-full md:w-2/4' >
        <CurrentUser userAuth={userAuth} userData={userData} />
        <SuggestedUser/>
      </div>
    </section>
  )
}

export default Sidebar