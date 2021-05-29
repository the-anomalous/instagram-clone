import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import FacebookLoginButton from '../components/buttons/fb-login-btn.component'
import SignUpForm from '../components/forms/sign-up-form.component'
import routes from '../constants/routes'
import Divider from '../components/divider.component'

const SignUpPage = () => {
  return (
    <article className='flex flex-col items-center justify-center h-screen bg-gray-background' >
      <section className=' bg-white rounded-sm border border-gray-primary
      max-w-sm text-center flex flex-col items-center justify-center w-81 p-4'>
        <figure className='my-1 mx-16 w-44'>
          <img src={logo} alt="instagram logo" />
        </figure>
        
        <div className='my-2 mx-2 text-gray-base font-semibold '>
          Sign up to see photos and videos from your friends.
        </div>

        <FacebookLoginButton className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded font-bold btn-reset flex justify-center'/>
        <Divider/>
        <SignUpForm/>
      </section>

      <aside className='bg-white border border-gray-primary w-81 text-center rounded-sm mt-7 text-sm '>
        <div className='my-4'>
          <p>
            Have an account?
            <Link to={routes.LOGIN_PAGE} className='font-semibold text-blue-medium'> Log In</Link> </p>
        </div>
      </aside>
    </article>
  )
}

export default SignUpPage