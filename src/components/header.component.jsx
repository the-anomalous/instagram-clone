import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as SignOut } from '../assets/icons/sign-out.svg';
import { useHistory } from 'react-router-dom'
import routes from '../constants/routes'
import UserContext from '../contexts/user.context'
import { signOut } from '../services/firebase.auth.services'
import Profile from '../assets/profile.jpg'

const Header = () => {
  const history = useHistory()
  const user = useContext(UserContext)

  return (
    <article className='bg-white w-full h-14 mb-6 border-b flex justify-center border-gray-primary' >
      <section className='container max-w-5xl h-full flex justify-between'>
        <div className='h-full flex items-center justify-center my-1 mx-2'>
          <h1>
            <figure  >
              <img src={logo} width='103px' alt="instagram logo" />
            </figure>
          </h1>
        </div>

        {
          user ? (
            <div className='flex flex-row items-center w-32 justify-around md:mx-4 lg:mx-4 '>
              <button
                type='button'
                className='btn-reset'
                onClick={() => history.push(routes.DASHBOARD)}>
                <Home />
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
                <figure className='rounded-full w-7'>
                  <img src={user.photoURL ? user.photoURL : Profile} alt="profile avatar" className='rounded-full' />
                </figure>
              </button>
              </div>
            ) : (
              <div className='flex flex-row items-center justify-around  w-36 md:mx-2 lg:mx-2 sm:text-sm sm:w-32 '>
                <button
                  className='bg-blue-light text-white font-semibold rounded px-2 py-1 btn-reset hover:opacity-90 '
                  onClick={() => history.push(routes.LOGIN_PAGE)}>
                  Login
                </button>
                <button
                  type='button'
                  className='font-semibold btn-reset text-blue-medium'
                  onClick={() => history.push(routes.SIGN_UP)}
                >
                  Sign Up
                </button>
              </div>
            )
          }
      </section>
    </article>
  )
}

export default Header