import React, { useState } from 'react'
import SubmitButton from '../buttons/submit-btn.component'
import routes from '../../constants/routes'

import EmailInput from '../custom-inputs/email-input.component'
import PasswordInput from '../custom-inputs/password-input.component'
import FullNameInput from '../custom-inputs/fullName-component'
import UsernameInput from '../custom-inputs/username-input.component'

import { doesUsernameExists } from '../../services/firestore.services'
import { signUpWithEmail } from '../../services/firebase.auth.services'
import { useHistory } from 'react-router-dom'

const SignUpForm = () => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory()

  const isValid = username.length > 0 //&& email.length > 0 && fullName.length > 0 && password.length > 4;
  
  const resetForm = () => {
    setUsername('')
    setFullName('')
    setPassword('')
    setEmail('')
  } 

  const onSubmit = async event => {
    event.preventDefault()
    const usernameExists = await doesUsernameExists(username, setError)
    if (!usernameExists) {
      const success = await signUpWithEmail(email, password, setError)
      resetForm()
      if (success) {
        history.push(routes.DASHBOARD)
      }
    } else {
      setError('Username already exists')
      setUsername('')
      setTimeout(() => setError('') , 2000);
    }
  }
 
  return (
    <>
      {error && <p className='text-red-primary w-64 text-center text-sm '>{error}</p>}
      <section className='mt-6'>
        <form
          method='post'
          className='flex flex-col justify-center align-middle text-sm '
          onSubmit={onSubmit}
        >
          <EmailInput
            emailValue={email}
            setEmail={setEmail}
          />
          <FullNameInput
            fullNameValue={fullName}
            setFullName={setFullName}
          />
          <UsernameInput
            usernameValue={username}
            setUsername={setUsername}
          />
          <PasswordInput
            passwordValue={password}
            setPassword={setPassword}
          />
          <SubmitButton isValid={isValid}>Sign Up</SubmitButton>
        </form>
      </section>
    </>
  )
}

export default SignUpForm