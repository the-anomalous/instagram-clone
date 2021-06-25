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

  const isValid = username.length > 0 && email.length > 0 && fullName.length > 0 && password.length > 4;
  
  const resetForm = () => {
    setUsername('')
    setFullName('')
    setPassword('')
    setEmail('')
  } 

  const onSubmit = async event => {
    event.preventDefault()
    // eslint-disable-next-line no-useless-escape
    if (/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(username)) {
      setError('You can only use alphabets, numbers and underscore in username')
      setUsername('');
      setTimeout(() => setError(''), 2000);
      return null
    }
    if (username.indexOf(' ') >= 0) {
      setError('You can only use alphabets, numbers and underscore in username')
      setUsername('')
      setTimeout(() => setError(''), 2000);
      return null
    }
    const usernameExists = await doesUsernameExists(username, setError)
    if (!usernameExists) {
      const success = await signUpWithEmail(email, password, fullName, username, setError)
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
          <SubmitButton className='my-3 w-65 bg-blue-light text-white px-2 py-5px rounded btn-reset disabled:opacity-60' isValid={isValid}>Sign Up</SubmitButton>
        </form>
      </section>
    </>
  )
}

export default SignUpForm