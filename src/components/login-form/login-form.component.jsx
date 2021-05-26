import React, { useState } from 'react';
import logo from '../../assets/logo.png'

import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import { Link } from 'react-router-dom'
import { signInWithFacebook } from '../../lib/firebase'
import { useHistory } from 'react-router-dom'

import Form from './form.component'
import routes from '../../constants/routes'

const LoginForm = () => {
  const [error, setError] = useState('')
  const history = useHistory()

  const handleFacebookSignIn = async () => await signInWithFacebook();

  const handleForgotPassword = async () => history.push(routes.RESET_PASSWORD)
  

  return (
    <article className='flex flex-col justify-center items-center sm:w-4/5 md:4/5 '>
      <h1 hidden>Instagram</h1>

      <section className='flex flex-col justify-center items-center rounded-sm bg-white border border-gray-primary p-4 text-sm '>
        <figure className='my-4 mx-16 w-44'>
          <img src={logo} alt="instagram logo" />
        </figure>
        
        {error && <p className='text-red-primary'>{error}</p> }
        
        <Form setError={setError} />
        
        <div className='flex flex-row justify-center items-center my-2'>
          <hr className='border-gray-primary w-24' />
          <span className=' inline-block mx-6 text-gray-base font-semibold'>OR</span>
          <hr className='border-gray-primary w-24'/>
        </div>

        <button
          className='outline-none my-3 btn-reset'
          onClick={handleFacebookSignIn}
        >
          <div className='text-blue-medium flex flex-row font-semibold' >
            <FacebookLogo className='w-4 mx-2'/>
            Log in with Facebook
          </div>
        </button>
        
        <button
          className='btn-reset my-2 text-blue-medium text-xs font-semibold'
          onClick={handleForgotPassword}
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

export default LoginForm