import React, { useEffect } from 'react'
import LoginFormContainer from '../components/login-form-container.component'
import profile from '../assets/iPhone-with-profile.png'

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Instagram - Login'
    }, [])

  return (
    <section className='w-screen bg-gray-background'>
      <div className='container flex justify-center content-center items-center align-middle max-w-screen-md h-screen mx-auto'>
        
        <figure className="flex w-3/5 sm:hidden mobile-sm:hidden md:hidden">
          <img src={profile} alt="Instagram Profile on iPhone" />
        </figure>

        <LoginFormContainer />
      </div>
    </section>
  )
}

export default LoginPage