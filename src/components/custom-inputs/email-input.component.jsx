import React from 'react'

const EmailInput = ({emailValue, setEmail}) => {
  return (
    <div>
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