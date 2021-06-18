import React, { useContext } from 'react'
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as SignOut } from '../../assets/icons/sign-out.svg';
import routes from '../../constants/routes'
import { signOut } from '../../services/firebase.auth.services'
import Profile from '../../assets/profile.jpg'
import UserAuthContext from '../../contexts/user-auth.context'
import isLoadingContext from '../../contexts/is-loading.context'
import useUser from '../../hooks/use-user.hook'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const user = useContext(UserAuthContext)
  const isLoading = useContext(isLoadingContext)
  const userData = useUser()
  
  return (
    isLoading ? (
      null
    ) : (
      user ? (
        <nav className='flex flex-row items-center w-32 justify-around md:mx-4 lg:mx-4 '>
          <button
            type='button'
            className='btn-reset'>
            <Link to={routes.DASHBOARD} >
              <Home />
            </Link>
          </button>
          <button
            type='button'
            className='btn-reset'
            onClick={signOut}>
            <SignOut />
          </button> 
          <button
            type='button'
            className='btn-reset'>
            <Link to={`${routes.DASHBOARD}profile/${userData?.username}`}>
              <figure className='w-7 h-7'>
                  <img src={userData?.profilePhotoURL || Profile} alt={`${userData?.username} profile`} className='rounded-full w-full h-full ' />
              </figure>
            </Link>
          </button>
        </nav>
      ) : (
            <nav className='flex flex-row items-center justify-around  w-36 md:mx-2 lg:mx-2 sm:text-sm sm:w-32 mobile-sm:w-32 '>
          <button
            className='bg-blue-light text-white font-semibold rounded px-2 py-1 btn-reset hover:opacity-90 '>
            <Link to={routes.LOGIN_PAGE}>Login</Link>
          </button>
          <button
            type='button'
            className='font-semibold btn-reset text-blue-medium'
          >
            <Link to={routes.SIGN_UP}>Sign Up</Link>
          </button>
        </nav>
      )
    )
  )
}

export default NavBar