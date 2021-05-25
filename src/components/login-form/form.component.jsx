import React, {useState} from 'react'

const Form = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  
  const isInvalid = credentials.email.length > 0 && credentials.password.length > 4;

  const onCredentialsChange = ({ target }) => {
    setCredentials({ ...credentials, [target.name]: target.value })
  }

  return (
    <div className='mt-6'>
      <form method='post' className='flex flex-col justify-center align-middle'>

        <input type="email" id='email' placeholder='Enter your email...' name='email' className='input-login' onChange={onCredentialsChange} />

        <div className="flex flex-row items-center relative	">
          <input type={!showPassword && "password"} name='password' id="password" placeholder='Enter your password...' className='input-login' onChange={onCredentialsChange} />

          <div className={`absolute right-0 pr-2 ${!credentials.password.length > 0 && 'hidden'}`}>
            <button type='button' onClick={() => setShowPassword(true)} className={`capitalize text-xs font-semibold focus:outline-none border-none ${showPassword && 'hidden'} `}>show</button>

            <button type='button' className={`capitalize text-xs font-semibold focus:outline-none border-none ${!showPassword && 'hidden'}`} onClick={() => setShowPassword(false)}>hide</button>
          </div>
        </div>

        <button type="submit" disabled={!isInvalid && true} className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded font-bold
            focus:outline-none border-none disabled:opacity-60 '>Log in</button>
      </form>
    </div>
  )
}

export default Form