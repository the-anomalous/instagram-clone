import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { ReactComponent as FacebookLogo } from '../assets/facebook.svg';


const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(false)

  const isInvalid = credentials.email.length > 0 || credentials.email.password > 4;
  
  return (
    <div className='flex flex-col justify-center items-center sm:w-4/5 md:4/5 '>
      <div className='flex flex-col justify-center items-center rounded-sm bg-white border border-gray-primary p-4 text-sm '>
        
        <div className='my-4 mx-16 w-44'>
          <img src={logo} alt="instagram logo" />
        </div>
        
        { error && <p>Error!!!</p> }
        
        <div className='mt-6'>
          <form method='post' className='flex flex-col justify-center align-middle'>
            <input type="email" placeholder='Enter your email...' name='email' className='input-login' />
            <input type="password" placeholder='Enter your password...' className='input-login' />
          
            <button type="submit" disabled={isInvalid && true} className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded font-bold
            focus:outline-none border-none disabled:opacity-60 '>Log in</button>
          </form>
        </div>

        <div className='flex flex-row justify-center items-center my-2'>
          <hr className='border-gray-primary w-24' />
          <span className=' inline-block mx-6 text-gray-base font-semibold'>OR</span>
          <hr className='border-gray-primary w-24'/>
        </div>

        <button className='border-none outline-none my-3 focus:outline-none'>
          <div className='text-blue-medium flex flex-row font-semibold' >
            <FacebookLogo className='w-4 mx-2'/>
            Log in with Facebook
          </div>
          </button>
      </div>

      <div className='bg-white border border-gray-primary w-81 text-center rounded-sm mt-7 text-sm '>
        <div className='my-4'>
          <p>Don't have an account? <span className='font-semibold text-blue-medium'>Sign up</span> </p>
        </div>
      </div>
    </div>
    
  )
}

export default LoginForm