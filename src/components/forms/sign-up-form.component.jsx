import React, { useState } from 'react'
import SubmitButton from '../buttons/submit-btn.component'

import EmailInput from '../custom-inputs/email-input.component'
import PasswordInput from '../custom-inputs/password-input.component'
import FullNameInput from '../custom-inputs/fullName-component'
import UsernameInput from '../custom-inputs/username-input.component'

const SignUpForm = () => {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')

  const isValid = email.length > 0 && username.length > 0 && fullName.length > 0 && password.length > 4;

  return (
    <>
      {error && <p className='text-red-primary w-64 text-center '>{error}</p>}
      <section className='mt-6'>
        <form
          method='post'
          className='flex flex-col justify-center align-middle text-sm '
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