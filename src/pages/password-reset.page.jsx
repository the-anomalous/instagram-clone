import React, {useState} from 'react'
import { ReactComponent as Lock } from '../assets/icons/lock.svg'
import { useHistory } from 'react-router-dom'
import { auth } from '../lib/firebase'

import routes from '../constants/routes'
import Modal from '../components/modal/modal.component'
import SubmitButton from '../components/submit-btn/submit-btn.component'

const PasswordReset = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [success, setSuccess] = useState(false)

  const resetPassword = () => {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        setIsOpen(true)
        setSuccess(true)
      })
      .catch((error) => {
        setIsOpen(true)
        setSuccess(false)
      })
  }

  const onSubmit = event => {
    event.preventDefault();
    resetPassword()  
  }


  const isValid = email.length !== 0

  return (
    <article className='flex items-center justify-center h-screen bg-gray-background' >
      <section className=' bg-white rounded-sm border border-gray-primary
      max-w-sm text-center flex flex-col items-center justify-center w-96 '>
        <figure className='mt-5 mb-4'>
          <Lock className=' w-24 h-24 ' />
        </figure>

        <h4 className='font-semibold text-base '>Trouble Logging In?</h4>

        <div className='my-4 mx-11 text-gray-base '>
          Enter your email and we'll send you a link to get back into your account.
        </div>

        <form method="post" onSubmit={onSubmit}>
          <input
            type="email"
            className='input-login'
            id='email'
            placeholder='Enter your email...'
            name='email'
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />

          <SubmitButton isValid={isValid}>Send Login Link</SubmitButton>

          <div className='flex flex-row justify-center items-center my-2'>
            <hr className='border-gray-primary w-24' />
            <span className=' inline-block mx-6 text-gray-base font-semibold'>OR</span>
            <hr className='border-gray-primary w-24' />
          </div>

        </form>

        <button
          className='outline-none font-semibold text-sm my-3 btn-reset text-black-light'
          onClick={() => history.push(routes.SIGN_UP)}
        >Create New Account</button>
        
        <aside className='rounded-sm border border-gray-primary w-full bg-gray-background mt-16'>
          <button
            className='outline-none font-semibold text-sm my-3 btn-reset text-black-light'
            onClick={() => history.push(routes.LOGIN_PAGE)}
          >Back to Login Page</button>
        </aside>
      </section>

      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        success={success}
        resend={resetPassword}
        setEmail={setEmail}
      >{success ? 'A Password reset link was sent to your email' : 'Cannot find the user, check your email once'}
      </Modal>
    </article>
  )
}

export default PasswordReset