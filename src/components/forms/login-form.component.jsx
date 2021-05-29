import React, { useState } from 'react'
import { signInWithEmail } from '../../services/firebase.auth.services'
import { useHistory } from 'react-router-dom'
import routes from '../../constants/routes'

import SubmitButton from '../buttons/submit-btn.component'
import EmailInput from '../custom-inputs/email-input.component'
import PasswordInput from '../custom-inputs/password-input.component'

const LoginForm = () => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const isValid = email.length > 0 && password.length > 4;

  const reset = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const status = await signInWithEmail(email, password, setError)
    if (status.success) {
      reset()
      history.push(routes.DASHBOARD)
    } else {
      status.error === 'wrong-password' ? setPassword('') : reset()
    }
  }

  return (
    <>
      {error && <p className='text-red-primary w-64 text-center '>{error}</p>}
      <section className='mt-6'>
        <form
          method='post'
          className='flex flex-col justify-center align-middle'
          onSubmit={handleSubmit}
        >
          <EmailInput
            emailValue={email}
            setEmail={setEmail}
          />
          <PasswordInput
            passwordValue={password}
            setPassword={setPassword}
          />
          <SubmitButton isValid={isValid}>Log in</SubmitButton>
        </form>
      </section>
    </>
  )
}

export default LoginForm