import React, {useEffect} from 'react'
import { ReactComponent as Lock } from '../assets/icons/lock.svg'
import { useHistory } from 'react-router-dom'
import routes from '../constants/routes'
import ResetPasswordForm from '../components/forms/reset-password-form.component'

const PasswordReset = () => {
  const history = useHistory()

  useEffect(() => document.title = 'Instagram - Password reset' , [])

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

        <ResetPasswordForm/>
        <div className='flex flex-row justify-center items-center my-2'>
          <hr className='border-gray-primary w-24' />
          <span className=' inline-block mx-6 text-gray-base font-semibold'>OR</span>
          <hr className='border-gray-primary w-24' />
        </div>

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

    </article>
  )
}

export default PasswordReset