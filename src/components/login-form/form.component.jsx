import React, { useState } from 'react'
import { auth } from '../../lib/firebase'
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'
import SubmitButton from '../submit-btn/submit-btn.component'

const Form = ({ setError }) => {
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  
  const isValid = credentials.email.length > 0 && credentials.password.length > 4;

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
    <section className='mt-6'>
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
            type={!showPassword ? "password" : undefined}
            className='input-login'
            name='password'
            id="password"
            value={credentials.password}
            placeholder='Enter your password...'
            onChange={onCredentialsChange} />

          <div className={`absolute right-0 pr-1 pl-1 mr-1 h-9 flex items-center bg-gray-background ${!credentials.password.length > 0 && 'hidden'}`}>
            <button
              type='button'
              onClick={() => setShowPassword(true)}
              className={`capitalize text-xs font-semibold btn-reset ${showPassword && 'hidden'} `}>
              show</button>

            <button
              type='button'
              className={`capitalize text-xs font-semibold btn-reset ${!showPassword && 'hidden'}`}
              onClick={() => setShowPassword(false)}>
              hide</button>
          </div>
        </div>

        <SubmitButton isValid={isValid}>Log in</SubmitButton>
      </form>
    </section>
  )
}

export default Form