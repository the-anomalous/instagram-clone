import React from 'react'

const EmailInput = ({emailValue, setEmail, className}) => {
  return (
    <div className={`${className}`}>
      <input
        type="email"
        className='input-login'
        placeholder='Email'
        name='email'
        value={emailValue}
        onChange={({target}) => setEmail(target.value)} />
    </div>
  )
}

export default EmailInput