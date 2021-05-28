import React, { useState }  from 'react'
import SubmitButton from '../submit-btn/submit-btn.component'
import Modal from '../modal/modal.component'
import { resetPassword } from '../../services/firebase.auth.services'
import EmailInput from '../custom-inputs/email-input.component'

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null)
  
  const isValid = email.length !== 0

  const onSubmit = event => {
    event.preventDefault();
    resetPassword(email, setIsOpen, setError)
  }

  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <EmailInput
          emailValue={email}
          setEmail={setEmail}
        />
        <SubmitButton isValid={isValid}>Send Login Link</SubmitButton>
      </form>

      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        success={!error}
        resend={resetPassword}
        setEmail={setEmail}
        setError={setError}
      >{error ? error : 'A Password reset link was sent to your email' }
      </Modal>
    </div>
  )
}

export default ResetPasswordForm