import React from 'react';
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import LoginForm from './forms/login-form.component'
import routes from '../constants/routes'
import FacebookLoginButton from './buttons/fb-login-btn.component'
import Divider from './divider.component'

const LoginFormContainer = () => {
  const history = useHistory()

  return (
    <article className='flex flex-col justify-center items-center sm:w-4/5 mobile-sm:w-4/5 md:4/5 '>
      <h1 hidden>Instagram</h1>

      <section className='flex flex-col justify-center items-center rounded-sm bg-white border border-gray-primary p-4 text-sm '>
        <figure className='my-4 mx-16 w-44'>
          <img src={logo} alt="instagram logo" />
        </figure>
        
        <LoginForm />
        <Divider/>
        <FacebookLoginButton className='text-blue-medium'/>
        <button
          className='btn-reset my-2 text-blue-medium text-xs font-semibold'
          onClick={() => history.push(routes.RESET_PASSWORD)}
        >
          Forgot password?</button>
      </section>

      <section className='bg-white border border-gray-primary w-81 text-center rounded-sm mt-7 text-sm '>
        <div className='my-4'>
          <p>Don't have an account? <Link to={routes.SIGN_UP} className='font-semibold text-blue-medium'>Sign up</Link> </p>
        </div>
      </section>
    
    </article>
  )
}

export default LoginFormContainer