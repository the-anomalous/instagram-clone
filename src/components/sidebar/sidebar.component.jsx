import React, {useContext} from 'react'
import useUser from '../../hooks/use-user.hook'
import UserAuthContext from '../../contexts/user-auth.context'
import CurrentUser from './current-user.component'
import SuggestedUser from './suggested-user.component'

const Sidebar = () => {
  const userData = useUser()
  const userAuth = useContext(UserAuthContext)

  return (
    <section className='col-start-3 col-end-4 p-2 relative sm:hidden md:hidden mobile-sm:hidden' >
      <div className='fixed' style={{width:'23.3%'}} >
        <CurrentUser userAuth={userAuth} userData={userData} />
        <SuggestedUser/>
      </div>
    </section>
  )
}

export default Sidebar