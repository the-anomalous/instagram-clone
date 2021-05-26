import React, { useEffect } from 'react'
import LoginForm from '../components/login-form/login-form.component'
import profile from '../assets/iPhone-with-profile.png'

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Instagram - Login'
    }, [])

  return (
    <section className='w-screen bg-gray-background'>
      <div className='container flex justify-center content-center items-center align-middle max-w-screen-md h-screen mx-auto'>
        
        <figure className="flex w-3/5 sm:hidden md:hidden">
          <img src={profile} alt="Instagram Profile on iPhone" />
        </figure>

        <LoginForm/>
      </div>
    </section>
  )
}

export default LoginPage