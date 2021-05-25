import React, { useState } from 'react'
import { auth } from '../../lib/firebase'
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

const Form = ({ setError }) => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  
  const isInvalid = credentials.email.length > 0 && credentials.password.length > 4;

  const onCredentialsChange = ({ target }) => {
    setCredentials({ ...credentials, [target.name]: target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      history.push(routes.DASHBOARD)
    } catch ({code}) {
      switch (code) {
        case "auth/user-not-found":
          setError("This Instagram account does not exist");
          break;
        case "auth/wrong-password":
          setError("Password does not match")
          break;
        default:
          break;
      }
      setCredentials({
        email: '',
        password: ''
      })
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <div className='mt-6'>
      <form
        method='post'
        className='flex flex-col justify-center align-middle'
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          className='input-login'
          id='email'
          placeholder='Enter your email...'
          name='email'
          value={credentials.email}
          onChange={onCredentialsChange} />

        <div className="flex flex-row items-center relative	">
          <input
            type={!showPassword && "password"}
            className='input-login'
            name='password'
            id="password"
            value={credentials.password}
            placeholder='Enter your password...'
            onChange={onCredentialsChange} />

          <div className={`absolute right-0 pr-2 ${!credentials.password.length > 0 && 'hidden'}`}>
            <button
              type='button'
              onClick={() => setShowPassword(true)}
              className={`capitalize text-xs font-semibold focus:outline-none border-none ${showPassword && 'hidden'} `}>
              show</button>

            <button
              type='button'
              className={`capitalize text-xs font-semibold focus:outline-none border-none ${!showPassword && 'hidden'}`}
              onClick={() => setShowPassword(false)}>
              hide</button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isInvalid && true}
          className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded font-bold focus:outline-none border-none disabled:opacity-60 '>
          Log in</button>
      </form>
    </div>
  )
}

export default Form