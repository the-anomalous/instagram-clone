import React, { useState } from 'react';
import logo from '../../assets/logo.png'

import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import Form from './form.component'

const LoginForm = () => {
  const [error, setError] = useState(false)
  
  return (
    <div className='flex flex-col justify-center items-center sm:w-4/5 md:4/5 '>
      
      <div className='flex flex-col justify-center items-center rounded-sm bg-white border border-gray-primary p-4 text-sm '>
        <div className='my-4 mx-16 w-44'>
          <img src={logo} alt="instagram logo" />
        </div>
        
        { error && <p>Error!!!</p> }
        
        <Form />
        
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