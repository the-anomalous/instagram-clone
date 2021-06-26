import React, { useEffect } from 'react'
import LoginFormContainer from '../components/login-form-container.component'

const LoginPage = () => {
  useEffect(() => document.title = 'Instagram - Login', [])

  return (
    <section className='w-screen bg-gray-background'>
      <div className='container flex justify-center content-center items-center align-middle max-w-screen-md h-screen mx-auto'>
        
        <figure className="flex w-3/5 sm:hidden mobile-sm:hidden md:hidden">
          <img src={'https://firebasestorage.googleapis.com/v0/b/instagram-clone-4614b.appspot.com/o/photos%2FiPhone-with-profile.png?alt=media&token=c2faedc8-2ca7-4659-97ca-f341b63eafc0'} alt="Instagram Profile on iPhone" />
        </figure>

        <LoginFormContainer />
      </div>
    </section>
  )
}

export default LoginPage